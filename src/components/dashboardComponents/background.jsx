import React from "react";
import { Container } from "./formComponents.styled";
import NextPage from "./nextPage";

export default function background() {
  return (
    <Container>
      <h2>Background</h2>
      <p>
        Please tell us what tech field you (want to) work in, and where you are
        in your tech career now. <br />
        where are you in your tech career now ?
      </p>
      <NextPage />
    </Container>
  );
}
