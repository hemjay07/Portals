import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const page = location.pathname.slice(-1);
  const sections = ["Personal Info", "Background", "Experience", "Career Goal"];
  const sectionElements = sections.map((section, index) => {
    index = index + 1;
    return (
      <StyledLink key={index} to={`/dashboard/page${index}`}>
        {/* I wrote this code so that the active section(the form the user is currently in) can be higlighted differently */}
        <span
          style={{
            color: index == page ? `var(--bgColor)` : `var(--accentColor)`,
            backgroundColor:
              index == page ? `var(--accentColor)` : `var(--bgColor)`,
          }}
        >{`${index}`}</span>
        <p>{section}</p>
      </StyledLink>
    );
  });
  return <Wrapper>{sectionElements}</Wrapper>;
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
const Wrapper = styled.div`
  padding-top: 2rem;
  border-right: solid 1px var(--accentColor);
  width: 25%;
  max-height: 100%;
  // background-color: red;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media screen and (max-width: 500px) {
    display: none;
  }
  p {
    color: var(--textColor);
  }
`;
