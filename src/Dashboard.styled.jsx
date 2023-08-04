import styled from "styled-components";

export const FormContainer = styled.div`
  border: solid black 2px;
  //   padding: 1rem;
  position: relative;
  margin: auto;
  width: 75%;
  height: 70vh;
  background: #aae090;
  display: flex;
  flex-direction: row;
  border: solid 2px #7fdb57;
  border-radius: 10px;
  @media screen and (max-width: 428px) {
    display: flex;
    width: 100%;
  }
`;

export const DashboardContainer = styled.div`
  padding: 0 1rem;
  border: solid 2px red;
  background-color: #020401;
  color: white;
  height: 100vh;
`;
