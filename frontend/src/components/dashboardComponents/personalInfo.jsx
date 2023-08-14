import React from "react";
import {
  Container,
  StyledLabel,
  StyledHeader,
  StyledParagraph,
} from "./formComponents.styled";
import Navigators from "./navigators";
import { useLocation, useNavigate } from "react-router-dom";

export default function PersonalInfo({ roadMapContent, handlechange }) {
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
    console.log("form");
    navigate(`/dashboard/page${nextpage}`);
  }

  return (
    <Container onSubmit={handleClick}>
      <StyledHeader>Personal Info</StyledHeader>
      <StyledParagraph>
        Please fill in your name, email address and location
      </StyledParagraph>
      <StyledLabel>
        What's your full name?
        <input
          name="fullName"
          value={roadMapContent.personalInfo.fullname}
          type="text"
          required
          onChange={(e) => {
            handlechange(e, "personalInfo");
          }}
        />
      </StyledLabel>
      <StyledLabel>
        Email address
        <input
          value={roadMapContent.personalInfo.email || ""}
          type="email"
          name="email"
          required
          onChange={(e) => {
            handlechange(e, "personalInfo");
          }}
        />
      </StyledLabel>
      <StyledLabel>
        Location (City, Country)
        <input
          value={roadMapContent.personalInfo.location || ""}
          name="location"
          type="text"
          required
          onChange={(e) => {
            handlechange(e, "personalInfo");
          }}
        />
      </StyledLabel>
      {/* <button onClick={() => console.log(roadMapContent.personalInfo)}></button> */}
      <Navigators />
    </Container>
  );
}
