import React from "react";
import Styled from "styled-components";
import { PiSmileySad } from "react-icons/pi";

export default function NotFound() {
  return (
    <Page>
      <Container>
        <StyledPiSmileySad />

        <H1>404</H1>
        <P>Page not found</P>
      </Container>
    </Page>
  );
}

// const = Styled.h1`

// `;

const Page = Styled.div`
width: 100%;
height: 100%;
background-color: black;
color:#7fdb57;
display: flex;

justify-content: center;

`;

const Container = Styled.div`

justify-content: center;
align-items: center;
text-align: center;
width: 60vw;
margin: 0 auto;
height: 100vh;
max-width: 1000px; 
`;

const StyledPiSmileySad = Styled(PiSmileySad)`
font-size: 300px;
margin: auto`;

const H1 = Styled.h1`
font-size: 150px`;

const P = Styled.p`
color:#164602;
font-size: 20px;

`;
