import React from "react";
import { Container } from "./formComponents.styled";
import NextPage from "./nextPage";

export default function background() {
  return (
    <Container>
      <div>
        {" "}
        Where does it come from? Contrary to popular belief, Lorem Ipsum is not
        going through the cites of the word in classical literature, discovered
        the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
        1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
        Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
        of ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
        reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
        "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
        exact original form, accompanied by English versions from the 1914
        translation by H. Rackham. Where can I get some?
      </div>
      <NextPage />
    </Container>
  );
}
