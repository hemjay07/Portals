import React from "react";
import { styled } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

function Header({ scroll }) {
  const location = useLocation().pathname;

  const currentLocation = location.includes("/dashboard")
    ? "dashboard"
    : "home";
  console.log(currentLocation, location);
  let log;
  if (currentLocation == "home") {
    log = <GreenButton onClick={() => scroll()}>Log in</GreenButton>;
  } else {
    log = <GreenButton onClick={() => scroll()}>Log out</GreenButton>;
  }
  return (
    <Head>
      <StyledLink to="/">
        <HugeText>Portals</HugeText>
      </StyledLink>
      {log}
    </Head>
  );
}

export default Header;

const Head = styled.div`
  color: #ffffff;
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const HugeText = styled.h1`
  color: #ffffff;
  font-size: 3rem;
  font-style: italic;
`;

const GreenButton = styled.button`
  background-color: #7fdb57;
  color: #020401;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    background-color: #164602;
    color: #fff;
  }
  @media screen and (max-width: 428px) {
    padding: 0 8px;
    font-size: 1.5rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
