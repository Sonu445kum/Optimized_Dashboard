// App.jsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Headers";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";

// Lazy load other pages for code splitting
const LandingPage = lazy(() => import("./pages/LandingPage"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));

const App = () => {
  return (
    <Router>
      <Header />

      <Suspense fallback={<p style={{ textAlign: "center", marginTop: "50px" }}>Loading...</p>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard/*" element={<Dashboard />} /> {/* Nested routes inside Dashboard */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
};

export default App;
