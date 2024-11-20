import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import dotenv from "dotenv";

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "plantedapp-3c30c.firebaseapp.com",
  databaseURL: "https://plantedapp-3c30c-default-rtdb.firebaseio.com",
  projectId: "plantedapp-3c30c",
  storageBucket: "plantedapp-3c30c.appspot.com",
  messagingSenderId: "284998417543",
  appId: "1:284998417543:web:9afd06f31fcce04f554c22",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
