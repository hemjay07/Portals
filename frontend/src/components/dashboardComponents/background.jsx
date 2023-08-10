import React, { useState } from "react";
// import { Container } from "./formComponents.styled";
import NextPage from "./nextPage";
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
  const [selectedOption, setSelectedOption] = useState();

  return (
    <Container>
      <StyledHeader>Background</StyledHeader>
      <StyledParagraph>Tell us about your background</StyledParagraph>
      <StyledLabel>
        What is your current role?
        <br />
        <StyledDesc>
          Please include your title and company.
          <br />
          For example, Microbiology student at University of Ibadan or Product
          Designer at Softcom Limited or Unemployed
        </StyledDesc>
        <input
          type="text"
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
              <option key={index} value={option.value}>
                {option.label}
              </option>
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
            type="radio"
            onChange={(e) => {
              handlechange(e, "background");
            }}
          />
          Experienced but seeking an entirely new role
        </label>
      </StyledRadio>
      {/* <button onClick={() => console.log(roadMapContent)}></button> */}

      <NextPage />
    </Container>
  );
}
