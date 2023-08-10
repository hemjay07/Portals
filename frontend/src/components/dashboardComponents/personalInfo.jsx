import React from "react";
import {
  Container,
  StyledLabel,
  StyledHeader,
  StyledParagraph,
} from "./formComponents.styled";
import NextPage from "./nextPage";

export default function PersonalInfo({ roadMapContent, handlechange }) {
  return (
    <Container>
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
          onChange={(e) => {
            handlechange(e, "personalInfo");
          }}
        />
      </StyledLabel>
      {/* <button onClick={() => console.log(roadMapContent.personalInfo)}></button> */}
      <NextPage />
    </Container>
  );
}
