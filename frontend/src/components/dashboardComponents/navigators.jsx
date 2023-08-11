import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { NextPageButton } from "./formComponents.styled";
import styled from "styled-components";

export default function Navigators({ disabled }) {
  const location = useLocation();
  const page = location.pathname.slice(-1);
  const navigate = useNavigate();
  let prevpage;

  if (page == 1) {
    prevpage = undefined;
  }
  if (page != 1) {
    prevpage = page / 1 - 1;
  }

  return (
    <NavigatorButtons>
      {prevpage ? (
        <StyledLink to={`/dashboard/page${prevpage}`}>
          <GoBackButton>Go back</GoBackButton>
        </StyledLink>
      ) : (
        <div> </div>
      )}
      <NextPageButton type="submit">{`${
        page == 4 ? "Submit" : "Next Page"
      }`}</NextPageButton>
    </NavigatorButtons>
  );
}
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const NavigatorButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #7fdb57;
  // font-size: 20px;
  text-decoration: none;
`;
const GoBackButton = styled.span`
  margin-top: 10px;
  /* float: bottom; */
  // border: 2px red solid;
  color: #7fdb57;
  font-size: 20px;

  &:hover {
    cursor: pointer;
    font-size: 22px;
  }
`;

const NextPageButton = styled.button`
  padding: 10px;
  float: right;
  margin-right: -1px;
  background-color: #7fdb57;
  border-radius: 10px;
  border: none;
  // border: 2px red solid;

  &:hover {
    background-color: #164602;
    color: #fff;
    scale: 1.1;
    cursor: pointer;
  }
`;
