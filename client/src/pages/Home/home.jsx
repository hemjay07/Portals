import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Header from "../../components/homePageComponents/Header";
import Hero from "../../components/homePageComponents/Hero";
import Benefits from "../../components/homePageComponents/Benefits";
import Cta from "../../components/homePageComponents/Cta";
import Footer from "../../components/homePageComponents/Footer";
import { styled } from "styled-components";
import { loggedInUserContext } from "../../App";
// import getUSers from "../firestore";

function Home() {
  const { loggedInUser, setLoggedInUser } = useContext(loggedInUserContext);
  const navigate = useNavigate();
  // const { user } = getUSers();
  // console.log(user);
  function scroll() {
    if (loggedInUser) {
      const roadmap = localStorage.getItem("roadmap");
      if (roadmap) {
        navigate("/roadmap");
      } else {
        navigate("/dashboard/page1");
      }
    } else {
      const element = document.getElementById("google-login");
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  useEffect(() => {
    setLoggedInUser(localStorage.getItem("email"));
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
