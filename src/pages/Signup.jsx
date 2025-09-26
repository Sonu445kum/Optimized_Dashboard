// Signup page: uses AuthContext signup() function
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import "../styles/auth.css"; // Import same CSS used for Login

// here i m Create a SignUp Functions
const Signup = () => {
  // Here I m Create 2 useState for stroing the initial value of State
  // Here i get the signup functionality which i have mention in the Auth Components
  const { signup } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // here i M create useNavigate for nagivate(send) to other pages
  const nav = useNavigate();

  const submit = (e) => {
    // it prevents the pages relaod when i submit the form
    e.preventDefault();
    if (signup(username, password)) {
      // if the users are signUp then it goes to login Pages
      nav("/login"); // Redirect to login after signup
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      {/* create the Form */}
      <form onSubmit={submit} className="auth-form">
        <input
          value={username}
          // e.target.value gives you the current text/value inside that input. 
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="auth-input"
        />
        <input
          type="password"
          value={password}
          // e.target.value gives you the current text/value inside that input.
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="auth-input"
        />
        <button type="submit" className="auth-button">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
