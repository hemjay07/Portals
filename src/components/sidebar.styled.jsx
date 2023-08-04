import styled from "styled-components";

export const Wrapper = styled.div`
  border-right: solid 2px black;
  width: 20%;
  height: 70vh;
  // background-color: red;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (max-width: 428px) {
    position: absolute;
    top: 0;
    width: 60%;
  }
`;
