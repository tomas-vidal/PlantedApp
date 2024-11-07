import { createContext } from "react";
import {
  getDocs,
  query,
  collection,
  updateDoc,
  where,
  limit,
  doc,
} from "firebase/firestore/lite";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { db } from ".././Firebase";
import { timestampToDate } from "../helpers/Helpers";
import { onSnapshot, setDoc } from "firebase/firestore";

export const Context = createContext({});

function FirebaseContext({ children }) {
  async function createPlant(userId) {
    await setDoc(collection(db, "plants"), {
      State: 0,
      CreatedAt: new Date(),
      UpdatedAt: new Date(),
      LastWater: new Date(),
      Streak: 0,
      UserId: userId,
    });

    return getPlant(userId);
  }

  async function getPlant(userId) {
    try {
      const plantsRef = collection(db, "plants");
      const q = query(plantsRef, where("UserId", "==", userId), limit(1));
      const querySnapshot = await getDocs(q);
      // onSnapshot(q, (doc) => {
      //   console.log(doc.data());
      // });
      if (!querySnapshot.empty) {
        const plantDoc = querySnapshot.docs[0];
        // const lastWaterDate = timestampToDate(
        //   plantDoc.data().LastWater
        // ).getTime();
        // const todayDate = new Date().getTime();

        // if (todayDate - lastWaterDate < 172800000) {
        //   switch (true) {
        //     case plantDoc.data().Streak < 3 && plantDoc.data().Streak > 1:
        //       updateDoc(doc(db, "plants", plantDoc.id), { State: 1 });
        //       break;
        //     case plantDoc.data().Streak < 6 && plantDoc.data().Streak > 3:
        //       updateDoc(doc(db, "plants", plantDoc.id), { State: 2 });
        //       break;
        //     case plantDoc.data().Streak < 9 && plantDoc.data().Streak > 6:
        //       updateDoc(doc(db, "plants", plantDoc.id), { State: 3 });
        //       break;
        //     default:
        //       break;
        //   }
        // } else {
        //   updateDoc(doc(db, "plants", plantDoc.id), { Streak: 0, State: 0 });
        // }

        return plantDoc.data();
      }
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
