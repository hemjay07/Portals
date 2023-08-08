import React, { useState, useContext, createContext } from "react";
import Sidebar from "../../components/dashboardComponents/Sidebar";
import Background from "../../components/dashboardComponents/background";
import CareerGoal from "../../components/dashboardComponents/careerGoals";
import Experience from "../../components/dashboardComponents/experience";
import PersonalInfo from "../../components/dashboardComponents/personalInfo";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import { IoLogoXbox } from "react-icons/io";
import styled from "styled-components";
import { loggedInUserContext } from "../../App";
import Header from "../../components/homePageComponents/Header";

import { Link, Routes, Route } from "react-router-dom";
import { DashboardContainer, FormContainer } from "./Dashboard.styled";
export const SideBarContext = createContext();

export default function Dashboard() {
  const [sidebar, setSideBar] = useState(true);
  const { loggedInUser } = useContext(loggedInUserContext);
  // console.log(setSidebar);
  // function setSideBar() {
  //   setSsidebar(!sidebar);
  // }

  return (
    <SideBarContext.Provider value={{ sidebar, setSideBar }}>
      <DashboardContainer>
        <Header />

        <FormContainer>
          <OpenSidebar onClick={() => setSideBar(!sidebar)} />
          <Sidebar />
          <Routes>
            <Route path="page1" element={<PersonalInfo />} />
            <Route path="page2" element={<Background />} />
            <Route path="page3" element={<Experience />} />
            <Route path="page4" element={<CareerGoal />} />
          </Routes>
        </FormContainer>
      </DashboardContainer>
    </SideBarContext.Provider>
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
  font-weight: 900;
  color: black;
  @media screen and (min-width: 428px) {
    display: none;
  }
`;

const Logo = styled(IoLogoXbox)`
  font-size: 36px;
`;

const LogoAndProfile = styled.div`
  display: flex;
  justify-content: space-between;
`;
