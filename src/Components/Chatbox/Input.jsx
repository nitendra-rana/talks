import React from "react";
import Img from "../../Pages/assets/img.png";
import Attach from "../../Pages/assets/attach.png"
const input = () => {
  return (
    <>
      <div className="input">
        <input type="text" placeholder="write your message......" />

        <div className="send">
          <img src={Img} alt="" />
          <input type="file"  id= "file" style ={{display:"none"}}/>
          <label htmlFor="file">
            <img src={Attach} alt="" />
          </label>
          <button>Send</button>
        </div>
      </div>
    </>
  );
};

export default input;
