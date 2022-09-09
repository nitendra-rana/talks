import React, { useContext, useState } from "react";
import { db } from "../../Firebase";
import { collection, query, where, getDocs, setDoc } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";

const Search = () => {
  const { currentUser } = useContext(AuthContext);

  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = async () => {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("displayName", "==", userName));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };
  const handleSelect = async () => {
    //check whether the group(chat in firebase) exist or not, if not create
    const combinedId =
      currentUser.id > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDocs(db, "chats", combinedId);

      if(!res.exists()){
        //create chat in chats collection
        await setDoc(doc, (db, 'chats', combinedId), {messages:[]})
        //create user chats
        userChats:{
          janesId:{
            combinedId: {
              userInfo:{
                Dn , img, id
              }
              lastMessage:""
              date:  
            }
          }
        }
      } 
    } catch (e) {
      setErr(true);
    }
    //create user chats
  };
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="find your friend"
          onKeyDown={handleKey}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      {err && <span style={{ color: "red" }}>Something went wrong.....</span>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user.photoUrl} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
