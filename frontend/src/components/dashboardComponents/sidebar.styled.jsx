import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 2rem;
  border-right: solid 1px black;
  width: 20%;
  height: 100%;
  // background-color: red;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  @media screen and (max-width: 500px) {
    position: absolute;
    top: 0;
    width: 60%;
    background-color: #7fdb57;
    border-right: solid 3px #7fdb57;
  }
  p {
    color: black;
  }
`;
