import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 2rem;
  border-right: solid 1px var(--accentColor);
  width: 25%;
  max-height: 100%;
  // background-color: red;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media screen and (max-width: 500px) {
    display: none;
  }
  p {
    color: var(--textColor);
  }
`;
