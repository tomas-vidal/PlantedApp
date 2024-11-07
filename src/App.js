import Main from "./pages/Main";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import UserContext from "./context/UserContext";

function App() {
  return (
    <UserContext>
      <Routes>
        <Route path="/plant" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </UserContext>
  );
}

export default App;
