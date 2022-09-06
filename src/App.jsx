import React from "react";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import "./style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ='/'  exact element ={<Home/>}></Route>
        <Route path ='/login'  exact element ={<Login/>}></Route>
        <Route path ='/register'  exact element ={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
