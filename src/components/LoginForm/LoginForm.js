import React from "react";
import "./LoginForm.css";
import LogoIcon from "./LogoIcon";
import { useContext } from "react";
import { Context } from "../../context/UserContext";

function LoginForm() {
  const { authWithGoogle } = useContext(Context);

  return (
    <form className="loginForm">
      <div className="loginForm__buttons">
        <LogoIcon />
        <h1>
          Planted
          <br />
          App
        </h1>
        <button className="loginForm__buttons--signup" onClick={authWithGoogle}>
          Login <span>with google</span>
        </button>
      </div>
      <footer>
        <a
          target="_blank"
          href="https://github.com/tomas-vidal/PlantedApp"
          rel="noreferrer"
        >
          Source code
        </a>
      </footer>
    </form>
  );
}

export default LoginForm;
