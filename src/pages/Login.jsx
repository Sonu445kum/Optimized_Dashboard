// Login page: uses AuthContext login() function
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import "../styles/auth.css"; // Import separate CSS
// Here i m Create the Login Components 
const Login = () => {
  // here i m get the Login Functionality which i Have mention on the AuthContext Components in the Auth Folder
  const { login } = useContext(AuthContext);
  // Here i m Create the 2 useState for stroing the initial value of our state that i.e(username)
  const [username, setUsername] = useState("");
  // Here i m Create the 2 useState for stroing the initial value of our state that i.e(password)
  const [password, setPassword] = useState("");
  // Here i m Create the useNagivate(Hooks) for sending or redirect to other pages
  const nav = useNavigate();

  const submit = (e) => {
    // e.preventDefault is used to prevent page reload
    e.preventDefault();
    if (login(username, password)) {
      // if the username and password are correct then it goes to the dashboard
      nav("/dashboard");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
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
          onChange={(e) => setPassword(e.target.value)} // onChange means whenever users type on the input field it triggers event
          placeholder="Password"
          className="auth-input"
        />
        {/* Here i m Create the Login Button */}
        <button type="submit" className="auth-button">Login</button>
      </form>
    </div>
  );
};
// here i export the our Login Components so that other components can easily Access the login Components with the help of Import
export default Login;
