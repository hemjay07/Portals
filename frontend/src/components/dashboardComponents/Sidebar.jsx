import React, { useContext, useEffect } from "react";
import { Wrapper } from "./sidebar.styled";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function Sidebar() {
  return (
    <Wrapper>
      <StyledLink to="/dashboard/page1">
        <span>1</span>
        <p>Personal Info</p>
      </StyledLink>
      <StyledLink to="/dashboard/page2">
        <span>2</span>
        <p>Background</p>
      </StyledLink>
      <StyledLink to="/dashboard/page3">
        <span>3</span>
        <p>Experience</p>
      </StyledLink>
      <StyledLink to="/dashboard/page4">
        <span>4</span>
        <p>Career Goal</p>
      </StyledLink>
    </Wrapper>
  );
}

const StyledLink = styled(Link)`
  // border: red 2px solid;
  gap: 0.8rem;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    scale: 1.1;
  }

  span {
    padding: 5px 10px;
    border: solid var(--accentColor) 2px;
    border-radius: 50%;
    color: var(--accentColor);

    &:hover {
      background-color: var(--accentColor);
      color: var(--bgColor);
    }
  }
`;
