import React, { useState } from "react";
import styled from "styled-components";
import { Container, StyledLabel, StyledHeader, StyledParagraph, StyledDesc } from "./formComponents.styled";
import NextPage from "./nextPage";

export default function Experience({ roadMapContent, handlechange }) {
  // const [skills, setSkills] = useState();
  return (
    <Container>
      <StyledHeader>Experience</StyledHeader>
      <StyledParagraph>Here, you tell us all about your experience so far!</StyledParagraph>
      <StyledLabel>
        What have you learnt so far?
        <br /> 
        <StyledDesc>Put skills, languages, frameworks, tools you have learnt/used
        here Sample: HTML, CSS, JavaScript, React Or: Interaction design
        principles, Branding, typography and color theory, Figma </StyledDesc>
        <input
          name="whatHaveYouLearntSoFar"
          value={roadMapContent.experience.whatHaveYouLearntSoFar || ""}
          onChange={(e) => {
            handlechange(e, "experience");
          }}
        />
      </StyledLabel>
      <StyledLabel>
        What are you learning now?
        <br />
        <StyledDesc>
        Put skills, languages, frameworks, tools you are learning now Sample:
        React Testing Library, TypeScript Or: User research and personas, Adobe
        XD </StyledDesc>
        <input
          name="whatAreYouLearningNow"
          value={roadMapContent.experience.whatAreYouLearningNow || ""}
          onChange={(e) => {
            handlechange(e, "experience");
          }}
        />
      </StyledLabel>
      <StyledLabel>
        Tell me about your work experience as it relates to a career in tech
        <br /> 
        <StyledDesc>
          Put your internships, and job roles (especially the last 2 with
          some job experience) Sample: Junior Frontend Engineer at BigCabal Media
          for 1 year, Frontend Developer Intern at HNG Internship for 3 months Or:
          Network Technician at Sterling Bank for 1 year, IT Support/Quality
          Assurance Analyst at FHI 360 for 4 years
        </StyledDesc>
        <input
          name="workExperience"
          value={roadMapContent.experience.workExperience || ""}
          onChange={(e) => {
            handlechange(e, "experience");
          }}
        />
      </StyledLabel>{" "}
      {/* <button onClick={() => console.log(roadMapContent.experience)}></button> */}
      <NextPage />
    </Container>
  );
}
