import React, { useState, createContext } from "react";

import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/home";
import Roadmap from "./pages/Roadmap/Roadmap";
export const loggedInUserContext = createContext(null);
export const loadingContext = createContext(null);

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [loading, setLoading] = useState(null);

  return (
    <loggedInUserContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
      }}
    >
      <loadingContext.Provider value={{ loading, setLoading }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/roadmap/" element={<Roadmap />} />
        </Routes>
      </loadingContext.Provider>
    </loggedInUserContext.Provider>
  );
}
