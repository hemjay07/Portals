import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

// firebase
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function Navigators({ roadMapContent }) {
  const location = useLocation();
  const page = location.pathname.slice(-1);
  const navigate = useNavigate();
  let prevpage;
  const usersCollectionRef = collection(db, "users");

  if (page == 1) {
    prevpage = undefined;
  }
  if (page != 1) {
    prevpage = page / 1 - 1;
  }
  function getRoadMap(e) {
    const id = "mujeebopabode07@gmail.com";
    if (e.target.innerHTML == "Get your roadmap") {
      // if the "Get your roadmap" button is clicked:

      // dummy input (expected from from)
      const userData = {
        userData: {
          personalInfo: {
            fullName: "Opabode Abdulmujeeb",
            email: "mujeebopabode07@gmail.com",
            location: "Oyo Town",
          },
          background: {
            whatIsYourCurrentRole:
              "Microbiology student at University of Ibadan ",
            status: "first job",
          },
          experience: {
            whatHaveYouLearntSoFar:
              "HTML, CSS, JavaScript, React Or: Interaction design principles, Branding, typography and color theory, Figma",
            whatAreYouLearningNow:
              "React Testing Library, TypeScript Or: User research and personas, Adobe XD",
            workExperience:
              "Junior Frontend Engineer at BigCabal Media for 1 year, Frontend Developer Intern at HNG Internship for 3 months",
          },
          careerGoal: { careerGoal: "Junior fullstack engineer" },
        },
      };

      // store user input data that comes from the form in firestore
      const storeInFireStore = async () => {
        try {
          console.log("yup");
          await setDoc(doc(db, "users", id), userData);
        } catch (error) {
          console.log(error);
        }
      };
      storeInFireStore();

      // make a post request to fetch the roadmap from the backend using the input data from the form
      const fetchRoadmap = async () => {
        try {
          const response = await axios.post("/api/generate-roadmap", {
            userdata: userData,
          });
          const roadmap = response.data.roadmap[0];

          // use the roadmap gotten from the backend to update the roadmap property of this particular user in firestore
          (async () => {
            try {
              await updateDoc(doc(db, "users", id), { roadMap: roadmap });
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
    }
    console.log();
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
      <NextPageButton onClick={getRoadMap} type="submit">{`${
        page == 4 ? "Get your roadmap" : "Next Page"
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
