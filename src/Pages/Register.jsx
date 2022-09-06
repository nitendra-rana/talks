import React, { useState } from "react";
import Img from "./assets/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(
            async (downloadURL) => {
              await updateProfile(res.user, {
                displayName,
                photoUrl: downloadURL,
              });
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
                photoUrl: downloadURL
              });
              await setDoc(doc(db, "userChats", res.user.uid), {});
              navigate("/");
            }
          );
        }
      );
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">TALKS</span>
          <span className="title">Register</span>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="file" style={{ display: "none" }} id="file" />
            <label htmlFor="file">
              <img src={Img}></img>
              <span>Add your avatar</span>
            </label>
            <button>Submit</button>
          </form>
          {err && (
            <span style={{ color: "red" }}>! Something went wrong...</span>
          )}
          <p>Already have an account ?, Login</p>
        </div>
      </div>
    </>
  );
};

export default Register;
