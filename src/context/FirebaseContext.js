import { createContext } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { db } from ".././Firebase";
import { timestampToDate } from "../helpers/Helpers";
import { onSnapshot, setDoc,
  query,
  getDocs,
  collection,
  updateDoc,
  where,
  limit,
  doc, } from "firebase/firestore";

export const Context = createContext({});

function FirebaseContext({ children }) {
  async function createPlant(userId) {
  }

  async function getPlant(userId) {
    try {
      
    } catch (error) {
      console.error("Error al obtener la planta: ", error);
      return null;
    }
  }

  async function waterPlant(userId) {
    const plantsRef = collection(db, "plants");
    const q = query(plantsRef, where("UserId", "==", userId), limit(1));
    const querySnapshot = await getDocs(q);
    let id;
    querySnapshot.forEach(async (document) => {
      id = document.id;
      await updateDoc(doc(db, "plants", id), {
        LastWater: new Date(),
        Streak: document.data().Streak + 1,
      });
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
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <Context.Provider
      value={{
        createPlant,
        getPlant,
        authWithGoogle,
        logout,
        waterPlant,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default FirebaseContext;
