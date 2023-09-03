import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { loggedInUserContext } from "../../App";
import { loadingContext } from "../../App";

// firebase
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function Navigators({ disableSubmit, roadMapContent }) {
  console.log(disableSubmit);
  const location = useLocation();
  const page = location.pathname.slice(-1);
  let prevpage;
  const { loggedInUser, setLoggedInUser } = useContext(loggedInUserContext);
  const { loading, setLoading } = useContext(loadingContext);
  const navigate = useNavigate();

  if (page == 1) {
    prevpage = undefined;
  }
  if (page != 1) {
    prevpage = page / 1 - 1;
  }
  function getRoadMap(e) {
    const id = loggedInUser;
    console.log(id);
    if (e.target.innerHTML == "Get your roadmap") {
      // if the "Get your roadmap" button is clicked

      const userData = roadMapContent;

      // -----------------------------------------------
      // -----------------------------------------------

      // store user input data that comes from the form in firestore
      const storeInFireStore = async () => {
        try {
          console.log("yup");
          console.log(id);
          await setDoc(doc(db, "users", id), { userData: userData });
        } catch (error) {
          console.log(error);
        }
      };
      storeInFireStore();

      // -----------------------------------------------
      // -----------------------------------------------
      // make a post request to fetch the roadmap from the backend using the input data from the form
      const fetchRoadmap = async () => {
        try {
          console.log(userData);
          const url = window.location.origin + "/api/generate";
          const response = await axios.post(url, userData);
          const roadmap = response.data;
          console.log(roadmap);
          console.log(roadmap);
          setLoading(false);
          localStorage.setItem("roadmap", JSON.stringify(roadmap));
          console.log(roadmap);

          // -----------------------------------------------
          // -----------------------------------------------
          // use the roadmap gotten from the backend to update the roadmap property of this particular user in firestore
          (async () => {
            try {
              console.log("updating doc");
              await updateDoc(doc(db, "users", id), { roadMap: roadmap });
              console.log("updated doc");
            } catch (error) {
              console.log(`"UpdateUserRoadmapError": ${error}`);
            }
          })();
        } catch (error) {
          console.log(error);
        }
        console.log(roadMapContent);
      };
      fetchRoadmap();

      // display the roadmap to the user
      // store the roadmap in local storage

      // store the roadmap in firestore

      console.log("fetching your roadmap");
      setLoading(true);
      navigate("/roadmap");
    }
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
      <NextPageButton
        disabled={disableSubmit}
        onClick={getRoadMap}
        type="submit"
        style={{
          cursor: disableSubmit ? "not-allowed" : "unset",
        }}
      >{`${page == 4 ? "Get your roadmap" : "Next Page"}`}</NextPageButton>
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
