import React, { useState, createContext } from "react";

import { Routes, Route } from "react-router-dom";
import icon from "../src/assets/favicon.ico";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/home";
import Roadmap from "./pages/Roadmap/Roadmap";
import NotFound from "./pages/notFound";
export const loggedInUserContext = createContext(null);
export const loadingContext = createContext(null);

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [loading, setLoading] = useState(null);

  React.useEffect(() => {
    const favicon = document.getElementById("favicon");
    favicon.setAttribute("href", icon);
  }, []);

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
          <Route path="/dashboard/:pageId" element={<Dashboard />} />
          <Route path="/roadmap/" element={<Roadmap />} />
          <Route path="*" element={<NotFound />} />{" "}
          {/* Fallback for unmatched routes */}
        </Routes>
      </loadingContext.Provider>
    </loggedInUserContext.Provider>
  );
}
