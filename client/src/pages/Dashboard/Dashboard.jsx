import React, { useState, useContext, createContext } from "react";
import Sidebar from "../../components/dashboardComponents/Sidebar";
import Background from "../../components/dashboardComponents/background";
import CareerGoal from "../../components/dashboardComponents/careerGoals";
import Experience from "../../components/dashboardComponents/experience";
import PersonalInfo from "../../components/dashboardComponents/personalInfo";
import NotFound from "../notFound";
import { IoLogoXbox } from "react-icons/io";
import styled from "styled-components";
// import { loggedInUserContext } from "../../App";
import Header from "../../components/homePageComponents/Header";

import { Link, Routes, Route, useParams, useNavigate } from "react-router-dom";
import { DashboardContainer, FormContainer } from "./Dashboard.styled";
// export const SideBarContext = createContext();
// export const roadMapContent = createContext

export default function Dashboard() {
  // Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.
  let params = useParams();
  const navigate = useNavigate();
  // const [sidebar, setSideBar] = useState(true);
  // const { loggedInUser } = useContext(loggedInUserContext);
  const [roadMapContent, setRoadMapContent] = useState({
    personalInfo: {},
    background: {},
    experience: {},
    careerGoal: {},
  });

  const pages = [PersonalInfo, Background, Experience, CareerGoal];
  const pageNumber = params.pageId.slice(-1);
  const PageComponent = pages[pageNumber - 1];

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
  if (pageNumber >= 1 && pageNumber <= 4) {
    return (
      // <SideBarContext.Provider value={{ sidebar, setSideBar }}>
      <DashboardContainer>
        <Header />

        <FormContainer>
          {/* <OpenSidebar onClick={() => setSideBar(!sidebar)} /> */}
          <Sidebar />
          <PageComponent
            roadMapContent={roadMapContent}
            handlechange={handlechange}
          />
          {/* <Routes>
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
        </Routes> */}
        </FormContainer>
      </DashboardContainer>
    );
  } else {
    return <NotFound />;
  }
}

const Logo = styled(IoLogoXbox)`
  font-size: 36px;
`;

const LogoAndProfile = styled.div`
  display: flex;
  justify-content: space-between;
`;
