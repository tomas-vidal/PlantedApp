import React, { useContext } from "react";
import { Context } from "../../context/UserContext";
import "./Header.css";
import LogoutIcon from "./LogoutIcon";
import EditIcon from "./EditIcon";
import FlameIcon from "./FlameIcon";

function Header() {
  const { user, plant, isLoading } = useContext(Context);
  return (
    <header>
      <section className="headerApp">
        <LogoutIcon />
        <h1 className="headerApp__plantName">Garlic Mustard</h1>
        <EditIcon />
      </section>
      <div className="headerStreak">
        {plant && (
          <div className="headerStreak__section">
            <h2 className="headerStreak__number">{plant.Streak}</h2>
            <FlameIcon />
          </div>
        )}
        <p className="headerStreak__text">day streak</p>
      </div>
    </header>
  );
}

export default Header;
