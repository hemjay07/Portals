import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { NextPageButton } from "./formComponents.styled";
import { SideBarContext } from "../../pages/Dashboard/Dashboard";
export default function NextPage() {
  const location = useLocation();
  const page = location.pathname.slice(-1);
  const { setSideBar } = useContext(SideBarContext);
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
      <NextPageButton onClick={() => setSideBar(false)}>
        {" "}
        Next page
      </NextPageButton>
    </Link>
  );
}
