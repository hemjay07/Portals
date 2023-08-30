import React from "react";
import { styled } from "styled-components";
import SignInButton from "../../pages/signIn";

function Cta({ loggedUser, setLoggedUser }) {
  return (
    <ActionCall id="google-login">
      <ActionTitle>You need this!</ActionTitle>
      <ActionParagraph>So why not click the button and see?</ActionParagraph>
      <SignInButton className="googleAuth" />
    </ActionCall>
  );
}

export default Cta;

const ActionCall = styled.div`
  background-color: #102009;
  min-height: 400px;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding-block: 4rem;
  padding-inline: 10px;
`;
const ActionTitle = styled.h3`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;
const ActionParagraph = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2.0rem;
  text-align: center;
`;
