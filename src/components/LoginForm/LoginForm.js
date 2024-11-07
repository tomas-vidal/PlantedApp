import React from "react";
import "./LoginForm.css";
import LogoIcon from "./LogoIcon";
import { useContext } from "react";
import { Context } from "../../context/FirebaseContext";

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
          Sign up <span>with google</span>
        </button>
        <button className="loginForm__buttons--login">Login</button>
      </div>
      <footer>
        <button>Terms of service</button>
      </footer>
    </form>
  );
}

export default LoginForm;
