import React from "react";
import { Container, StyledLabel } from "./formComponents.styled";
import NextPage from "./nextPage";

export default function PersonalInfo({ roadMapContent, handlechange }) {
  // function handlechange(e) {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   // console.log(name, value);
  //   setRoadMapContent((prev) => {
  //     return {
  //       ...prev,
  //       personalInfo: { ...prev.personalInfo, [name]: value },
  //     };
  //   });
  // }
  return (
    <Container>
      <h2>Personal Info</h2>
      <p>Please fill in your name email address and location</p>
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
        Location(City, Country)
        <input
          value={roadMapContent.personalInfo.location || ""}
          name="location"
          type="text"
          onChange={(e) => {
            handlechange(e, "personalInfo");
          }}
        />
      </StyledLabel>
      <button onClick={() => console.log(roadMapContent.personalInfo)}></button>
      <NextPage />
    </Container>
  );
}
