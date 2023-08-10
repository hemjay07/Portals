import styled from "styled-components";

export const FormContainer = styled.div`
  border: solid black 2px;
  //   padding: 1rem;
  /* position: relative; */
  margin: auto;
  width: 90%;
  max-width: 1000px;
  min-height: 70vh;
  background: var(--secColor);
  display: flex;
  flex-direction: row;
  border: solid 2px var(--secColor);
  border-radius: 10px;
  outline: 2px solid red;
  @media screen and (max-width: 428px) {
    display: flex;
    width: 100%;
    min-height: 85vh;
  }
`;

export const DashboardContainer = styled.div`
  padding: 0 1rem;
  // border: solid 2px red;
  background-color: var(--bgColor);
  color: white;
  min-height: 100vh;
  // background-color: white;
`;
