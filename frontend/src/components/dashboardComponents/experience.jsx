import React, { useState } from "react";
import styled from "styled-components";
import { Container, StyledLabel } from "./formComponents.styled";
import NextPage from "./nextPage";

export default function Experience({ roadMapContent, handlechange }) {
  return (
    <Container>
      <h1>Experience</h1>
      <p>Here, you tell us all about your experience so far!</p>
      <StyledLabel>
        What have you learnt so far?
        <br /> Put skills, languages, frameworks, tools you have learnt/used
        here Sample: HTML, CSS, JavaScript, React Or: Interaction design
        principles, Branding, typography and color theory, Figma
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
        Put skills, languages, frameworks, tools you are learning now Sample:
        React Testing Library, TypeScript Or: User research and personas, Adobe
        XD
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
        <br /> Put your internships, and job roles (especially the last 2 with
        some job experience) Sample: Junior Frontend Engineer at BigCabal Media
        for 1 year, Frontend Developer Intern at HNG Internship for 3 months Or:
        Network Technician at Sterling Bank for 1 year, IT Support/Quality
        Assurance Analyst at FHI 360 for 4 years
        <input
          name="workExperience"
          value={roadMapContent.experience.workExperience || ""}
          onChange={(e) => {
            handlechange(e, "experience");
          }}
        />
      </StyledLabel>{" "}
      <NextPage />
    </Container>
  );
}
