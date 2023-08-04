import React from "react";
import { keyframes, styled } from "styled-components";
import linkedin from "../assets/linkedin.png";
import heart from "../assets/heart.svg";
import twitter from "../assets/X_logo.svg";

function Footer() {
  return (
    <Foot>
      <FooterHr />
      <FooterBody>
        <FooterText>
          Built with <FooterLove src={heart} />
        </FooterText>
        <FooterSocials>
          <FooterIcon src={linkedin} />
          <FooterIcon src={twitter} />
        </FooterSocials>
      </FooterBody>
    </Foot>
  );
}

export default Footer;

const Foot = styled.div`
  background-color: #020401;
`;
const FooterHr = styled.hr`
  color: #aae090;
  margin-inline: 40px;
`;
const FooterBody = styled.div`
  display: flex;
  color: #fff;
  margin-inline: 40px;
  padding-block: 20px;
  justify-content: space-between;
`;

const FooterText = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const FooterSocials = styled.div`
  display: flex;
  gap: 10px;
`;

const FooterIcon = styled.img`
  filter: brightness(0) saturate(100%) invert(100%) sepia(25%) saturate(5751%)
    hue-rotate(38deg) brightness(102%) contrast(72%);
  padding: 6px;
  border-radius: 50%;
  border: 2px solid #000;
  width: 40px;
  height: 40px;

  &:hover {
    cursor: pointer;
    scale: 1.2;
  }
`;
// const FooterSvgIcon = styled.svg`
//   filter: brightness(0) saturate(100%) invert(100%) sepia(25%) saturate(5751%) hue-rotate(38deg) brightness(102%) contrast(72%);
//   padding: 8px;
//   border-radius: 50%;
//   border: 2px solid #000;
// `
const transit = keyframes`
 to {
  transform: translate(20px, 10px);
 } 
`;

const FooterLove = styled.img`
  filter: brightness(0) saturate(100%) invert(100%) sepia(25%) saturate(5751%)
    hue-rotate(38deg) brightness(102%) contrast(72%);
  animation: ${transit} 400ms linear infinite;
`;
