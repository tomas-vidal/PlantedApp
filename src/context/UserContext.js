import { onAuthStateChanged, getAuth } from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { db } from ".././Firebase";
import {
  onSnapshot,
  addDoc,
  getDocs,
  query,
  collection,
  updateDoc,
  where,
  limit,
  doc,
} from "firebase/firestore";
import { timestampToDate } from "../helpers/Helpers";

const auth = getAuth();

export const Context = createContext({});

function UserContext({ children }) {
  const [dateTimer, setDateTimer] = useState(new Date());
  const [user, setUser] = useState(null);
  const [plant, setPlant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  async function createPlant(userId) {
    addDoc(collection(db, "plants"), {
      Name: "Garlic Mustard",
      State: 0,
      CreatedAt: new Date(),
      UpdatedAt: new Date(),
      LastWater: new Date(),
      Streak: 0,
      UserId: userId,
    });
  }

  async function getPlant(userId) {
    setIsLoading(true);
    const plantsRef = collection(db, "plants");
    const q = query(plantsRef, where("UserId", "==", userId), limit(1));

    return new Promise((resolve, reject) => {
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let plantData = null;

        querySnapshot.forEach((doc) => {
          if (doc.exists()) {
            plantData = doc.data();
          }
        });

        if (plantData !== null) {
          setPlant(plantData);
        } else {
          setPlant(null);
        }

        setIsLoading(false);
        resolve();
      });

      setTimeout(() => {
        reject("Error: No se pudo obtener datos de la planta");
      }, 5000);
    });
  }

  function waterPlant(userId) {
    return new Promise(async (resolve, reject) => {
      const plantsRef = collection(db, "plants");
      const q = query(plantsRef, where("UserId", "==", userId), limit(1));

      try {
        const querySnapshot = await getDocs(q);
        let id;

        querySnapshot.forEach((document) => {
          id = document.id;
          updateDoc(doc(db, "plants", id), {
            LastWater: new Date(),
            Streak: document.data().Streak + 1,
          })
            .then(() => {
              resolve();
            })
            .catch((error) => {
              console.error("Error al regar la planta:", error);
              reject(error);
            });
        });
      } catch (error) {
        console.error("Error al regar la planta", error);
        reject(error);
      }
    });
  }

  function changeNamePlant(userId, namePlant) {
    return new Promise(async (resolve, reject) => {
      const plantsRef = collection(db, "plants");
      const q = query(plantsRef, where("UserId", "==", userId), limit(1));

      try {
        const querySnapshot = await getDocs(q);
        let id;

        querySnapshot.forEach((document) => {
          id = document.id;
          updateDoc(doc(db, "plants", id), {
            Name: namePlant,
          })
            .then(() => {
              resolve();
            })
            .catch((error) => {
              console.error("Error al cambiar el nombre", error);
              reject(error);
            });
        });
      } catch (error) {
        console.error("Error al cambiar de nombre", error);
        reject(error);
      }
    });
  }

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const logout = () => {
    signOut(auth);
  };

  const authWithGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {})
      .catch((error) => {});
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        getPlant(user.uid);
        navigate("/plant");
      } else {
        navigate("/login");
      }
    });
  }, [user, navigate, auth]);

  return (
    <Context.Provider
      value={{
        user,
        setPlant,
        plant,
        isLoading,
        createPlant,
        authWithGoogle,
        logout,
        waterPlant,
        getPlant,
        setIsLoading,
        dateTimer,
        setDateTimer,
        changeNamePlant,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default UserContext;
