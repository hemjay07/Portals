import React from "react";

import { Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import Home from "./home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
    </Routes>
  );
}
