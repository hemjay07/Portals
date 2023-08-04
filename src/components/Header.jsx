import React from "react";
import { styled } from "styled-components";

function Header({ scroll }) {
  return (
    <Head>
      <HugeText>Portals</HugeText>
      <GreenButton onClick={() => scroll()}>Log in</GreenButton>
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
`;
