import React from "react";
import { styled } from "styled-components";
import check from "../../assets/check.svg";

function Hero({ scroll }) {
  return (
    <HeroBody>
      <HeroText>
        <HeroHeader>
          Unleash your tech career with <HeroHighlight>Portals</HeroHighlight>
        </HeroHeader>
        <HeroParagraph>
          Tell us who you want to become in tech, your background & experience
          so far and we will draw up a roadmap for you
        </HeroParagraph>
        <HeroAction>
          <HeroButton onClick={() => scroll()}>
            Get your career roadmap
          </HeroButton>
          <HeroTriggers>
            <HeroBenefits>
              <HeroIcon src={check} />
              <HeroHint>Personalized</HeroHint>
            </HeroBenefits>
            <HeroBenefits>
              <HeroIcon src={check} />
              <HeroHint>Quality</HeroHint>
            </HeroBenefits>
          </HeroTriggers>
        </HeroAction>
      </HeroText>
      <HeroVideo src="https://www.loom.com/embed/16de322bcb1d41a0959252780e204859?sid=77705573-ba08-42f7-b7b5-e5db56f0f585?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true. " frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></HeroVideo>
    </HeroBody>
  );
}

export default Hero;

const HeroBody = styled.div`
  width: 100%;
  min-height: 800px;
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 600px) {
    gap: 50px;
    text-align: left;
    align-items: flex-start;
  }
`;

const HeroHighlight = styled.span`
  color: #aae090;
  font-style: italic;
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 300px;
  padding: 60px;
  text-align: center;
  margin-bottom: 200px;

  @media screen and (max-width: 600px) {
    padding: 20px 0;
  }
`;

const HeroVideo = styled.iframe`
  width: 60%;
  height: 400px;
  border: 2px solid #7fdb57;
  align-self: center;

  @media screen and (max-width: 600px) {
    width: 95%;
    min-height: 300px;
    padding-inline: 0;
  }
`;

const HeroHeader = styled.h1`
  color: #ffffff;
  font-size: 5rem;
  font-style: normal;

  @media screen and (max-width: 600px) {
    font-size: 3rem;
  }
`;

const HeroParagraph = styled.p`
  color: #ffffff;
  /* margin-bottom: 5px; */
  font-size: 1.2rem;
`;

const HeroAction = styled.div``;

const HeroTriggers = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  justify-content: center;
  margin-top: 10px;

  @media screen and (max-width: 600px) {
    margin-top: 0;
  }
`;

const HeroButton = styled.button`
  background-color: #7fdb57;
  color: #020401;
  padding: 10px 20px;
  min-width: 200px;
  align-self: center;
  border: none;
  border-radius: 10px;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    background-color: #164602;
    color: #fff;
  }

  @media screen and (max-width: 428px) {
    padding: 6 12px;
    font-size: 1.5rem;
  }
`;

const HeroBenefits = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  margin-top: 20px;

  @media screen and (max-width: 600px) {
    margin-top: 50px;
  }
`;

const HeroIcon = styled.img`
  border-radius: 50%;
  filter: brightness(0) saturate(100%) invert(100%) sepia(25%) saturate(5751%)
    hue-rotate(38deg) brightness(102%) contrast(72%);
  border: 2px solid #000;
`;

const HeroHint = styled.p`
  color: #fff;
`;
