import React, { useContext, useEffect } from "react";
import { Wrapper } from "./sidebar.styled";
import { Link } from "react-router-dom";
import { TfiAngleDoubleLeft } from "react-icons/tfi";
import styled from "styled-components";
import { SideBarContext } from "../../pages/Dashboard/Dashboard";
export default function Sidebar() {
  const { sidebar, setSideBar } = useContext(SideBarContext);

  // console.log(setSideBar);
  function handleClick() {
    if (window.innerWidth < 500) {
      setSideBar(false);
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 500) {
        setSideBar(true);
      } else {
        setSideBar(false);
      }
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Dependency array is empty to run the effect only on mount and unmount

  // Rest of your component code

  return (
    <>
      {sidebar && (
        <Wrapper>
          <CloseSidebar onClick={handleClick} />
          <StyledLink to="/dashboard/page1" onClick={() => handleClick()}>
            <span>1</span> <p>Personal Info</p>
          </StyledLink>
          <StyledLink to="/dashboard/page2" onClick={() => handleClick()}>
            <span>2</span>
            <p>Background</p>
          </StyledLink>
          <StyledLink to="/dashboard/page3" onClick={() => handleClick()}>
            <span>3</span>
            <p>Experience</p>
          </StyledLink>
          <StyledLink to="/dashboard/page4" onClick={() => handleClick()}>
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
  @media screen and (min-width: 500px) {
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
    padding: 5px 10px;
    border: solid var(--accentColor) 2px;
    border-radius: 50%;
    color: var(--accentColor);

  }
`;
