import React, { useEffect, useContext } from "react";
import { auth, authProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { loggedInUserContext } from "../App";

export default function SignInButton() {
  const { loggedInUser, setLoggedInUser } = useContext(loggedInUserContext);
  const navigate = useNavigate();
  function handleSignIn() {
    if (loggedInUser) {
      // can be better, we are using the same thing below and in the scroll function in the dashboard
      const roadmap = localStorage.getItem("roadmap");
      if (roadmap) {
        navigate("/roadmap");
      } else {
        navigate("/dashboard/page1");
      }
    } else {
      signInWithPopup(auth, authProvider).then((data) => {
        console.log(data.user);
        setLoggedInUser(data.user.email);
        localStorage.setItem("email", data.user.email);
        const roadmap = localStorage.getItem("roadmap");
        if (roadmap) {
          navigate("/roadmap");
        } else {
          navigate("/dashboard/page1");
        }
      });
    }
  }
  useEffect(() => {
    setLoggedInUser(localStorage.getItem("email"));
  });
  return <Button onClick={handleSignIn}>Sign in with Google</Button>;
}

const Button = styled.button`
  background-color: #7fdb57;
  color: #020401;
  padding: 15px 30px;
  min-width: 200px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  margin: auto;

  &:hover {
    background-color: #164602;
    color: #fff;
    // scale: 1.1;
    // margin-top: 10px;
  }
`;
