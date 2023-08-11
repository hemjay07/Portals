import React, { useState } from "react";
import Navigators from "./navigators";
import { styled } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

import {
  Container,
  StyledLabel,
  StyledHeader,
  StyledParagraph,
  StyledDesc,
  StyledRadio,
  StyledRadioHead,
} from "./formComponents.styled";
const techDivisions = [
  { label: "", value: "" },
  { label: "Design", value: "design" },
  { label: "Software Engineering", value: "softwareEngineering" },
  { label: "DevOps", value: "devOps" },
  { label: "Data", value: "data" },
  { label: "Mobile", value: "mobile" },
  { label: "People Operations/HR", value: "peopleOperations" },
  { label: "Product", value: "product" },
  { label: "Security", value: "security" },
  { label: "Business", value: "business" },
  { label: "Writing", value: "writing" },
  { label: "DevRel", value: "devrel" },
  { label: "QA", value: "qa" },
];
export default function Background({ roadMapContent, handlechange }) {
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
      <StyledHeader>Background</StyledHeader>
      <StyledParagraph>Tell us about your background</StyledParagraph>
      <StyledLabel>
        What is your current role?
        <br />
        <StyledDesc>
          Please include your title and company.
          <br />
          For example, Microbiology student at University of Ibadan{" "}
          {window.innerWidth < 468
            ? ""
            : "or Product Designer at Softcom Limited or Unemployed"}
        </StyledDesc>
        <input
          type="text"
          required
          placeholder="Microbiology student at University of Lagos"
          name="whatIsYourCurrentRole"
          value={roadMapContent.background.whatIsYourCurrentRole || ""}
          onChange={(e) => {
            handlechange(e, "background");
          }}
        />
      </StyledLabel>
      <StyledLabel>
        What part of tech are you interested in?
        <select
          name="whatPartOfTechAreYouInterestedIn"
          value={
            roadMapContent.background.whatPartOfTechAreYouInterestedIn || ""
          }
          onChange={(e) => {
            handlechange(e, "background");
          }}
        >
          {techDivisions.map((option, index) => {
            return (
              <StyledOption key={index} value={option.value}>
                {option.label}
              </StyledOption>
            );
          })}
        </select>
      </StyledLabel>

      <StyledRadio>
        <StyledRadioHead>
          Where are you in your tech career now?
        </StyledRadioHead>
        <label>
          <input
            value="learning"
            required
            name="status"
            type="radio"
            onChange={(e) => {
              handlechange(e, "background");
            }}
          />
          Learning
        </label>

        <label>
          <input
            value="first job"
            required
            name="status"
            type="radio"
            onChange={(e) => {
              handlechange(e, "background");
            }}
          />
          Looking for your first job/internship
        </label>

        <label>
          <input
            value="seeking promotion"
            name="status"
            required
            type="radio"
            onChange={(e) => {
              handlechange(e, "background");
            }}
          />
          Experienced but seeking promotion
        </label>

        <label>
          <input
            value="new role"
            name="status"
            required
            type="radio"
            onChange={(e) => {
              handlechange(e, "background");
            }}
          />
          Experienced but seeking an entirely new role
        </label>
      </StyledRadio>
      {/* <button onClick={() => console.log(roadMapContent)}></button> */}

      <Navigators />
    </Container>
  );
}

const StyledOption = styled.option`
  &:checked {
    background-color: var(--accentColor);
  }

  &:hover {
    background-color: var(--accentColor);
  }
`;
