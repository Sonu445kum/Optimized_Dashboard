import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import "../styles/header.css";
import Logo from "../assets/Optimized_Logo.png"; //  import image

const Headers = () => {
  const { user, logout } = useContext(AuthContext);
  const nav = useNavigate();

  const handleLogout = () => {
    logout();
    nav("/");
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo">
            <img
              src={Logo} // use imported variable
              alt="Optimized Dashboard Logo"
            />
            <h1>Optimized Dashboard</h1>
          </div>
          <nav className="nav-links">
            <Link className="homeLink" to="/">Home</Link>
            {user && <Link to="/dashboard">Dashboard</Link>}
          </nav>
        </div>

        <div className="header-right">
          {user ? (
            <>
              <span className="user-name">Hi, {user.username} 👋</span>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="signup-btn" to="/signup">
                Sign Up
              </Link>
              <Link className="login-btn" to="/login">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Headers;
