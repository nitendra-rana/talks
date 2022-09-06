import React from "react";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">TALKS</span>
        <span className="title">Login</span>
        <form action="">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Submit</button>
        </form>
        <p>Do not have an account ?, Register</p>
      </div>
    </div>
  );
};

export default Login;
