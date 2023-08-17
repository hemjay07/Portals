import styled from "styled-components";

export const FormContainer = styled.div`
  border: solid black 2px;
  margin: 0 auto;
  width: 90%;
  max-width: 1000px;
  overflow-y: hidden;
  background: var(--secColor);
  display: flex;
  flex-direction: row;
  border: solid 2px var(--secColor);
  border-radius: 10px;
 

  @media screen and (max-width: 428px) {
    display: flex;
    width: 100%;
    min-height: 85vh;
  }
`;

export const DashboardContainer = styled.div`
  padding: 0px 1rem 20px;
  // border: solid 2px red;
  background-color: var(--bgColor);
  color: white;
  min-height: 100vh;
  // background-color: white;
`;
