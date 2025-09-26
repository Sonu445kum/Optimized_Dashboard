// Simple frontend-only auth (localStorage) for demo purposes
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // load logged-in user on mount
  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  // signup: store credentials in localStorage under key = username
  const signup = (username, password) => {
    if (!username || !password) {
      toast.error("Please provide username and password");
      return false;
    }
    if (localStorage.getItem(username)) {
      toast.error("User already exists");
      return false;
    }
    localStorage.setItem(username, JSON.stringify({ username, password }));
    toast.success("Signup successful");
    return true;
  };

  // login: only allow if credentials match
  const login = (username, password) => {
    const saved = localStorage.getItem(username);
    if (!saved) {
      toast.error("User not found");
      return false;
    }
    const parsed = JSON.parse(saved);
    if (parsed.password !== password) {
      toast.error("Incorrect password");
      return false;
    }
    localStorage.setItem("user", JSON.stringify(parsed));
    setUser(parsed);
    toast.success("Login successful");
    return true;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    toast.info("Logged out");
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
