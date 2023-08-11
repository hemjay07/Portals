import React from "react";
import styled from "styled-components";
import {
  Container,
  StyledLabel,
  StyledHeader,
  StyledParagraph,
  StyledDesc,
} from "./formComponents.styled";
import NextPage from "./nextPage";
import Navigators from "./navigators";

export default function CareerGoal({ roadMapContent, handlechange }) {
  return (
    <Container>
      <StyledHeader>Career Goals</StyledHeader>
      <StyledParagraph>
        Here you tell us who you'd like to be career-wise.
      </StyledParagraph>
      <StyledLabel>
        What is your ONE career goal?
        <br />
        <StyledDesc>
          This should be achievable in the next 1-3 years. Please be specific
          and short.
        </StyledDesc>
        <input
          type="text"
          name="careerGoal"
          onChange={(e) => {
            handlechange(e, "careerGoal");
          }}
          placeholder="Become a junior-level frontend developer"
        />
      </StyledLabel>
      <Navigators />
    </Container>
  );
}
