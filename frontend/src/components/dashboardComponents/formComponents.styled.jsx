import styled from "styled-components";

export const Container = styled.div`
  color: var(--textColor);
  padding-block: 15px;
  padding-left: 10px;

  /* padding-left: 0.5rem; */
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
  margin: 0 auto;
  width: 70%;

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;
export const NextPageButton = styled.button`
  padding: 10px;
  float: right;
  margin-right: 10px;
  background-color: #7fdb57;
  border-radius: 10px;
  border: none;
  
  &:hover {
    background-color: #164602;
    color: #fff;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 20px;
  font-size: 1rem;


  input, select {
    width: 70%;
    padding: 0.8rem;
    border: none;
    border-radius: 10px;
    font-size: 0.9rem;
    margin-top: 10px;

    &:focus {
      outline: solid 2px var(--accentColor);
    }
  }
  
  @media screen and (max-width: 500px) {
    input, select {
      width: 60%;
    }
  }
`;

export const StyledHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`

export const StyledParagraph = styled.p`
  font-size: 1.1rem;
  margin-bottom: 20px;
`

export const StyledDesc = styled.span`
  font-size: 0.8rem;
`

export const StyledRadio = styled.p`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  accent-color: var(--accentColor);


  label {
    margin-top: 10px;
    display: flex;
    gap: 0.4rem;
    font-size: 0.9rem;

  }
`;

export const StyledRadioHead = styled.p`
  font-size: 1rem;
`