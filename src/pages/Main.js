import React from "react";
import Header from "../components/Header/Header";
import ButtonSection from "../components/ButtonSection/ButtonSection";
import Plant from "../components/Plant/Plant";

function Main() {
  return (
    <div className="plantSec">
      <Header />
      <Plant />
      <ButtonSection />
    </div>
  );
}

export default Main;
