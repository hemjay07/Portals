import React from "react";
import styled from "styled-components";
import {
  Container,
  StyledLabel,
  StyledHeader,
  StyledParagraph,
  StyledDesc,
} from "./formComponents.styled";
import Navigators from "./navigators";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function CareerGoal({ roadMapContent, handlechange }) {
  const location = useLocation();
  const page = location.pathname.slice(-1);
  const navigate = useNavigate();
  let nextpage;
  if (page == 4) {
    nextpage = 4;
  }
  if (page != 4) {
    nextpage = page / 1 + 1;
  }

  function handleClick(e) {
    e.preventDefault();
    // console.log("form");
    navigate(`/dashboard/page${nextpage}`);
  }
  return (
    <Container onSubmit={handleClick}>
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
          value={roadMapContent.careerGoal.careerGoal || ""}
          required
          name="careerGoal"
          onChange={(e) => {
            handlechange(e, "careerGoal");
          }}
          placeholder="Become a junior-level frontend developer"
        />
      </StyledLabel>
      <Navigators roadMapContent={roadMapContent} />
    </Container>
  );
}