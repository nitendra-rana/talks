import React from "react";
const url = "https://image.shutterstock.com/image-photo/home-office-dress-code-girl-600w-1719984745.jpg";
const Navbar = () => {
  
  return (
    <div className="navbar">
      <span className="logo">TALKS</span>
      <div className="user">
        <img src={url} alt="" />
        <span>Name</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
