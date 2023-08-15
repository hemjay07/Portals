import { styled } from "styled-components"
export const StyledRoadmap = styled.div`
    &::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #131a0f;
    border-radius: 5px;
    margin-block: 3px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #449720;
    border-radius: 5px;
  }
`