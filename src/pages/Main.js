import React, { useContext, useEffect } from "react";
import Header from "../components/Header/Header";
import ButtonSection from "../components/ButtonSection/ButtonSection";
import Plant from "../components/Plant/Plant";
import { Context } from "../context/UserContext";

function Main() {
  const { user, getPlant } = useContext(Context);

  return (
    <div className="plantSec">
      <Header />
      <Plant />
      <ButtonSection />
    </div>
  );
}

export default Main;
