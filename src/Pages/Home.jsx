import React from "react";
import Chat from "../Components/Chatbox/Chat";
import Sidebar from "../Components/Chat/Sidebar";
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
