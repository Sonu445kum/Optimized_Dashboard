import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";
// here i m create object as images for sliding the images on the landing pages.
// or now you can say in the professional or Technical language is Image Carousel.
const images = [
  "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZGluZyUyMHBhZ2V8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1625315642929-3774ba1d1af4?q=80&w=2157&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/flagged/photo-1551301622-6fa51afe75a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const LandingPage = () => {
  // here i m Create the the useState for storing the initial value of State
  const [current, setCurrent] = useState(0);

  // here i m Create the useEffect for image Crousel or images Slider
  useEffect(() => {
    // here i m create interval functions so that the images are sliding after the 3 seconds
    // suppose we have three images=[img1,img2,img3];
    // and current index =0;
    // so that images index is increment by 1
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // change image every 3 seconds
    // after the traversing all the images it returns on the first index
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-container">
      <div className="landing-hero">
        <h1> Welcome to My Optimized Dashboard</h1>
        <p>Fast, cached, and optimized UI to browse Users, Posts, and Todos.</p>

        <div className="landing-slider">
          {/* it traverse all three images */}
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`slide-${idx}`}
              // its the opacity if the idx===current it show images where the index=1 other is invisible
              style={{ opacity: idx === current ? 1 : 0 }}
            />
          ))}
        </div>

        <div className="landing-buttons">
          {/* if the users click on the  getStarted  it goes on the SignUp pages*/}
          <Link to="/signup" className="btn btn-getstarted">Get Started</Link>
          {/* {/* if the users click on the  getStarted  it goes on the Login pages*/} 
          <Link to="/login" className="btn btn-login">Login</Link>
        </div>

        <div className="landing-info">
         <h4>Why Choose Our Optimized Dashboard?</h4>
  <ul>
    <li> Instant Data Fetching: Browse Users, Posts, and Todos with lightning-fast responses.</li>
    <li> Smart Caching: RTK Query caches your data for seamless performance and minimal API calls.</li>
    <li> Dynamic Search & Filters: Quickly find exactly what you’re looking for.</li>
    <li> Paginated Views: Keep your dashboard clean and easy to navigate.</li>
    <li> Interactive UI: Fully interactive components with real-time updates.</li>
    <li> Secure Login & Signup: Only registered users can access the dashboard.</li>
    <li> Responsive Design: Looks perfect on any device.</li>
    <li> Future-ready Architecture: Optimized with React.memo, useMemo, and useCallback.</li>
  </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
