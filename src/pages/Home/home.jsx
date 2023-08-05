import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./home.css";
import Header from "../../components/homePageComponents/Header";
import Hero from "../../components/homePageComponents/Hero";
import Benefits from "../../components/homePageComponents/Benefits";
import Cta from "../../components/homePageComponents/Cta";
import Footer from "../../components/homePageComponents/Footer";
import { styled } from "styled-components";
import { loggedInUserContext } from "../../App";

function Home({ loggedUser, setLoggedUser }) {
  // const [value, setValue] = useState("");
  const { loggedInUser, setLoggedInUser } = useContext(loggedInUserContext);
  const navigate = useNavigate();

  function scroll() {
    if (loggedInUser) {
      navigate("/dashboard");
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
