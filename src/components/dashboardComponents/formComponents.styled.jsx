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
  // border: solid 2px red;
  //   background-color: grey;
  @media screen and (max-width: 500px) {
    width: 90%;
    // background-color: blue;
    overflow: scroll;
  }
`;
export const NextPageButton = styled.button`
  padding: 10px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #7fdb57;
  // border: black solid 1px;
  border-radius: 10px;
  &:hover {
    background-color: #164602;
    color: #fff;
  }
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
  @media screen and (max-width: 500px) {
    input {
      width: 60%;
    }
  }
`;
