import React, { useEffect, useState } from "react";
import { auth, authProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
// import { Button } from "./signIn.styled";
import styled from "styled-components";
import Home from "./home";
import { useNavigate } from "react-router-dom";

export default function SignInButton() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  function handleSignIn() {
    if (value) {
      navigate("/dashboard");
    } else {
      signInWithPopup(auth, authProvider).then((data) => {
        console.log(data);
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
        navigate("/dashboard");
      });
    }
  }
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });
  return <Button onClick={handleSignIn}>Sign in with google</Button>;
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
