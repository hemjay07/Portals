import React, { useState, createContext } from "react";

import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/home";
export const loggedInUserContext = createContext(null);

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState("");

  return (
    <loggedInUserContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </loggedInUserContext.Provider>
  );
}
