import React, { useState, useContext, createContext } from "react";
import Sidebar from "../../components/dashboardComponents/Sidebar";
import Background from "../../components/dashboardComponents/background";
import CareerGoal from "../../components/dashboardComponents/careerGoals";
import Experience from "../../components/dashboardComponents/experience";
import PersonalInfo from "../../components/dashboardComponents/personalInfo";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import { IoLogoXbox } from "react-icons/io";
import styled from "styled-components";
// import { loggedInUserContext } from "../../App";
import Header from "../../components/homePageComponents/Header";

import { Link, Routes, Route } from "react-router-dom";
import { DashboardContainer, FormContainer } from "./Dashboard.styled";
// export const SideBarContext = createContext();
// export const roadMapContent = createContext

export default function Dashboard() {
  // const [sidebar, setSideBar] = useState(true);
  // const { loggedInUser } = useContext(loggedInUserContext);
  const [roadMapContent, setRoadMapContent] = useState({
    personalInfo: {},
    background: {},
    experience: {},
    careerGoal: {},
  });

  function handlechange(e, componentName) {
    const name = e.target.name;
    const value = e.target.value;
    setRoadMapContent((prev) => {
      return {
        ...prev,
        [componentName]: { ...prev[componentName], [name]: value },
      };
    });
  }

  return (
    // <SideBarContext.Provider value={{ sidebar, setSideBar }}>
    <DashboardContainer>
      <Header />

      <FormContainer>
        {/* <OpenSidebar onClick={() => setSideBar(!sidebar)} /> */}
        <Sidebar />
        <Routes>
          <Route
            path="page1"
            element={
              <PersonalInfo
                roadMapContent={roadMapContent}
                handlechange={handlechange}
              />
            }
          />
          <Route
            path="page2"
            element={
              <Background
                roadMapContent={roadMapContent}
                handlechange={handlechange}
              />
            }
          />
          <Route
            path="page3"
            element={
              <Experience
                roadMapContent={roadMapContent}
                handlechange={handlechange}
              />
            }
          />
          <Route
            path="page4"
            element={
              <CareerGoal
                roadMapContent={roadMapContent}
                handlechange={handlechange}
              />
            }
          />
        </Routes>
      </FormContainer>
    </DashboardContainer>
  );
}

const Logo = styled(IoLogoXbox)`
  font-size: 36px;
`;

const LogoAndProfile = styled.div`
  display: flex;
  justify-content: space-between;
`;
