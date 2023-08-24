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
position: absolute;
width: 100%;
height: 100%;
background-color: black;
color:#7fdb57;

justify-content: center;

`;

const Container = Styled.div`
margin: auto;
justify-content: center;
align-items: center;
text-align: center;
width: 60vw;
max-width: 1000px; 
// border: red 2px solid
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
