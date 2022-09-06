import React from "react";
import Cam from "../../Pages/assets/cam.png"
import Add from "../../Pages/assets/add.png"
import More from "../../Pages/assets/more.png"
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>User Singh</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  );
};

export default Chat;
