import React, { useState } from "react";
import { Wrapper } from "./sidebar.styled";
import { Link } from "react-router-dom";
import { TfiAngleDoubleLeft } from "react-icons/tfi";
import styled from "styled-components";
export default function Sidebar({ sidebar, handleClick }) {
  return (
    <>
      {" "}
      {sidebar && (
        <Wrapper>
          <CloseSidebar onClick={handleClick} />
          <Link to="/dashboard/page1">Personal info</Link>
          <Link to="/dashboard/page2">Background</Link>
          <Link to="/dashboard/page3">Experience</Link>
          <Link to="/dashboard/page4">carrer careerGoals</Link>
        </Wrapper>
      )}{" "}
    </>
  );
}

const CloseSidebar = styled(TfiAngleDoubleLeft)`
  margin-left: auto;
  font-size: 40px;
  padding-right: 10px;
  @media screen and (min-width: 428px) {
    display: none;
  }
`;
