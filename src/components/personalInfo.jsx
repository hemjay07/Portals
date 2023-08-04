import React from "react";
import styled from "styled-components";
import { Container, StyledLabel } from "./formComponents.styled";
import NextPage from "./nextPage";

export default function PersonalInfo() {
  return (
    <Container>
      <h2>Personal Info</h2>
      <p>Please fill in your name email address and location</p>
      <StyledLabel>
        Name
        <input type="text" />
      </StyledLabel>
      <StyledLabel>
        {" "}
        Email address
        <input type="email" />
      </StyledLabel>
      <StyledLabel>
        Location(City, Country)
        <input type="text" />
      </StyledLabel>
      <NextPage />
    </Container>
  );
}
