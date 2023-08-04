import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Background from "./components/background";
import CareerGoal from "./components/careerGoals";
import Experience from "./components/experience";
import PersonalInfo from "./components/personalInfo";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { IoLogoXbox } from "react-icons/io";
import styled from "styled-components";

import { Link, Routes, Route } from "react-router-dom";
import { DashboardContainer, FormContainer } from "./Dashboard.styled";
// import SignIn from "./signIn";

export default function Dashboard() {
  const [sidebar, setSidebar] = useState(true);
  function handleClick() {
    setSidebar(!sidebar);
  }
  return (
    <DashboardContainer>
      <Link to="/">
        {" "}
        <h1>navbar</h1>
      </Link>

      <LogoAndProfile>
        <Logo />
        <div>
          <ProfilePicture />
          Opeyimika
        </div>
      </LogoAndProfile>
      <FormContainer>
        <OpenSidebar onClick={handleClick} />
        <Sidebar sidebar={sidebar} handleClick={() => handleClick()} />{" "}
        <Routes>
          <Route path="page1" element={<PersonalInfo />} />
          <Route path="page2" element={<Background />} />
          <Route path="page3" element={<Experience />} />
          <Route path="page4" element={<CareerGoal />} />
        </Routes>
      </FormContainer>
    </DashboardContainer>
  );
}

const OpenSidebar = styled(TfiAngleDoubleRight)`
  //   margin-left: auto;
  border: 2px black solid;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 2rem;
  padding-right: 10px;
  @media screen and (min-width: 428px) {
    display: none;
  }
`;

const Logo = styled(IoLogoXbox)`
  font-size: 36px;
`;

const ProfilePicture = styled(CgProfile)`
  position: relative;
  right: 0;
  font-size: 36px;
  margin-right: 0.5rem;
  border: red solid 2px;
`;

const LogoAndProfile = styled.div`
  display: flex;
  justify-content: space-between;
`;
