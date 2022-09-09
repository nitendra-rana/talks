import React from "react";

const url =
  "https://image.shutterstock.com/image-photo/home-office-dress-code-girl-600w-1719984745.jpg";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={url} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello how are you </p>
        <img src={url} alt="" />
      </div>
    </div>
  );
};

export default Message;
