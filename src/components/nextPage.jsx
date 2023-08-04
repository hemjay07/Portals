import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NextPageButton } from "./formComponents.styled";

export default function NextPage() {
  const location = useLocation();
  const page = location.pathname.slice(-1);
  let nextpage;
  if (page == 4) {
    // nextpage = "submitButton";
    nextpage = 4;
  } else {
    nextpage = page / 1 + 1;
    console.log(nextpage);
  }
  return (
    <Link to={`/dashboard/page${nextpage}`}>
      {" "}
      <NextPageButton> Next page</NextPageButton>
    </Link>
  );
}
