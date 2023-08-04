import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./home.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import { styled } from "styled-components";

function Home() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  function scroll() {
    if (value) {
      navigate("/dashboard");
    } else {
      const element = document.getElementById("google-login");
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });
  return (
    <Background>
      <Header scroll={scroll} />
      <Hero scroll={scroll} />
      <Benefits />
      <Cta />
      <Footer />
    </Background>
  );
}

export default Home;

const Background = styled.div`
  background-color: #020401;
  min-height: 100vh;
`;
