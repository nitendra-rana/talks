import React from "react";
import Chats from './Chats'
const url =
  "https://image.shutterstock.com/image-photo/home-office-dress-code-girl-600w-1719984745.jpg";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="find your friend"/>
      </div>
      <div className="userChat">
        <img src={url} alt="" />
        <div className="userChatInfo">
          <span>user singh</span>
         
        </div>
      </div>
    </div>
  );
};

export default Search;
