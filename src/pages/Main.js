import React, { useContext, useEffect } from "react";
import Header from "../components/Header/Header";
import ButtonSection from "../components/ButtonSection/ButtonSection";
import Plant from "../components/Plant/Plant";
import { Context } from "../context/UserContext";
import { Context as FirebaseContext } from "../context/FirebaseContext";

function Main() {
  const { user, setPlant } = useContext(Context);
  const { getPlant } = useContext(FirebaseContext);

  useEffect(() => {
    if (user) {
      getPlant(user.uid).then((data) => {
        setPlant(data);
      });
    }
  }, [user, getPlant, setPlant]);

  return (
    <div className="plantSec">
      <Header />
      <Plant />
      <ButtonSection />
    </div>
  );
}

export default Main;
