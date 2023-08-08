import React from "react";
import styled from "styled-components";
import { Container, StyledLabel } from "./formComponents.styled";
import NextPage from "./nextPage";

export default function CareerGoal({ roadMapContent, handlechange }) {
  return (
    <Container>
      <h2>Career Goals</h2>
      <p>Here you tell us who you'd like to be career-wise.</p>
      <StyledLabel>
        What is your ONE career goal?
        <br />
        This should be achievable in the next 1-3 years. Please be specific and
        short.
        <input
          type="text"
          name="careerGoal"
          onChange={(e) => {
            handlechange(e, "careerGoal");
          }}
        />
      </StyledLabel>
      <NextPage />
    </Container>
  );
}
