import React, { useContext, useEffect } from "react";
import Header from "../components/Header/Header";
import ButtonSection from "../components/ButtonSection/ButtonSection";
import Plant from "../components/Plant/Plant";
import { Context } from "../context/UserContext";
import { db } from "../Firebase";
import { onSnapshot,
  query,
  collection,
  where,
  limit,
  } from "firebase/firestore";

function Main() {
  const { user, setPlant, plant } = useContext(Context);

  useEffect(() => {
    if (user) {
      const q = query(collection(db, "plants"), where("UserId", "==", user.uid), limit(1));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (plant == null) {
            setPlant(doc.data());
          }
        });
      });
    }
  }, [user, plant]);
  
  return (
    <div className="plantSec">
      <Header />
      <Plant />
      <ButtonSection />
    </div>
  );
}

export default Main;
