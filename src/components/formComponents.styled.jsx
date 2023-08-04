import styled from "styled-components";

export const Container = styled.div`
  color: black;
  padding-left: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100%;
  margin: auto;
  width: 60%;
  //   background-color: grey;
  @media screen and (max-width: 428px) {
    width: 90%;
    // background-color: blue;
  }
`;
export const NextPageButton = styled.button`
  padding: 10px;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  input {
    width: 300px;
    padding: 0.5rem;
    border: solid 1px black;
    border-radius: 10px;
  }
  @media screen and (max-width: 428px) {
    input {
      width: 60%;
    }
  }
`;
