import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import FirebaseContext from "./context/FirebaseContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FirebaseContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FirebaseContext>
  </React.StrictMode>
);
