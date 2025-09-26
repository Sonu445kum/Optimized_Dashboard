import React from "react";
import { Link } from "react-router-dom";
import "../styles/general.css"; // general styles file
// here i m create a simple components that is Home
const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Optimized Dashboard</h1>
      <p>Explore Users, Posts, and Todos with optimized caching & UI.</p>

      <div className="home-buttons">
        <Link className="home-btn" to="/signup">Sign Up</Link>
        <Link className="home-btn" to="/login">Login</Link>
        <Link className="home-btn" to="/dashboard">Go to Dashboard</Link>
      </div>

      <div className="home-image">
        <img
          src="https://source.unsplash.com/800x300/?dashboard,analytics,data"
          alt="dashboard hero"
        />
      </div>
    </div>
  );
};

export default Home;
