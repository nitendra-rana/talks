import React from "react";
const url =
  "https://image.shutterstock.com/image-photo/home-office-dress-code-girl-600w-1719984745.jpg";
const Chat = () => {
  return (
    <div>
      <div className="userChat">
        <img src={url} alt="" />
        <div className="userChatInfo">
          <span>user2 singh</span>
          <p>hello</p>
        </div>
      </div>

      <div className="userChat">
        <img src={url} alt="" />
        <div className="userChatInfo">
          <span>abcd sing</span>
          <p>hii</p>
        </div>
      </div>

      <div className="userChat">
        <img src={url} alt="" />
        <div className="userChatInfo">
          <span>raj sing</span>
          <p>oh really ?</p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
