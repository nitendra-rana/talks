import React, { useContext } from "react";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import "./style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./Components/context/AuthContext";

const App = () => {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  return (
    <BrowserRouter>
      <Routes path="/">
        <Route
          index
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="login" exact element={<Login />}></Route>
        <Route path="register" exact element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
