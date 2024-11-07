import { onAuthStateChanged, getAuth } from "firebase/auth";
import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context as FirebaseContext } from "./FirebaseContext";

const auth = getAuth();

export const Context = createContext({});

function UserContext({ children }) {
  const [user, setUser] = useState(null);
  const [plant, setPlant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { getPlant } = useContext(FirebaseContext);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        getPlant(user.uid).then((plant) => {
          setPlant(plant);
        });
        navigate("/plant");
      } else {
        setUser(null);
        setPlant(null);
        navigate("/login");
      }
      setIsLoading(false);
    });
  }, [user, navigate, getPlant]);

  console.log(plant);

  return (
    <Context.Provider value={{ user, setPlant, plant, isLoading }}>
      {children}
    </Context.Provider>
  );
}

export default UserContext;
