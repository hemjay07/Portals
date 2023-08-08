import React, { useState } from "react";
// import { Container } from "./formComponents.styled";
import NextPage from "./nextPage";
import { Container, StyledLabel } from "./formComponents.styled";
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
      <h2>Background</h2>
      <p>Tell us about your background</p>
      <StyledLabel>
        What is your current role?
        <br /> Please include your title and company. For example, Microbiology
        student at University of Ibadan, Product Designer at Softcom Limited,
        Unemployed
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
          value="looking for your first job/internship"
          name="status"
          type="radio"
          onChange={(e) => {
            handlechange(e, "background");
          }}
        />
        looking for your first job/internship
      </label>
      <label>
        <input
          value="Experienced but seekign promotion"
          name="status"
          type="radio"
          onChange={(e) => {
            handlechange(e, "background");
          }}
        />
        Experienced but deekign promotion
      </label>
      <label>
        <input
          value="Experienced but seeking an entirely new role"
          name="status"
          type="radio"
          onChange={(e) => {
            handlechange(e, "background");
          }}
        />
        Experienced but seeking an entirely new role
      </label>
      <button onClick={() => console.log(roadMapContent)}></button>

      <NextPage />
    </Container>
  );
}
