import React, { useContext, useState } from "react";
import { Wrapper } from "./sidebar.styled";
import { Link } from "react-router-dom";
import { TfiAngleDoubleLeft } from "react-icons/tfi";
import styled from "styled-components";
import { SideBarContext } from "../../pages/Dashboard/Dashboard";
export default function Sidebar() {
  const { sidebar, setSideBar } = useContext(SideBarContext);

  // console.log(setSideBar);
  function handleClick() {
    setSideBar(!sidebar);
  }
  if (window.innerWidth > 428) {
    setSideBar(true);
  }
  return (
    <>
      {sidebar && (
        <Wrapper>
          <CloseSidebar onClick={handleClick} />
          <StyledLink
            to="/dashboard/page1"
            onClick={() => setSideBar(!sidebar)}
          >
            <span>1</span> <p>Personal Info</p>
          </StyledLink>
          <StyledLink
            to="/dashboard/page2"
            onClick={() => setSideBar(!sidebar)}
          >
            <span>2</span>
            <p>Background</p>
          </StyledLink>
          <StyledLink
            to="/dashboard/page3"
            onClick={() => setSideBar(!sidebar)}
          >
            <span>3</span>
            <p>Experience</p>
          </StyledLink>
          <StyledLink
            to="/dashboard/page4"
            onClick={() => setSideBar(!sidebar)}
          >
            <span>4</span>

            <p>Career Goals</p>
          </StyledLink>
        </Wrapper>
      )}{" "}
    </>
  );
}

const CloseSidebar = styled(TfiAngleDoubleLeft)`
  margin-left: auto;
  font-size: 40px;
  font-weight: 900;
  color: black;
  padding-right: 10px;
  @media screen and (min-width: 428px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  // border: red 2px solid;
  gap: 0.5rem;
  text-decoration: none;
  display: flex;
  // justify-content: center;
  align-items: center;
  span {
    padding: 5px;
    border: solid black 2px;
    border-radius: 100%;
    color: black;
  }
`;
