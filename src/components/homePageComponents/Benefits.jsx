import React from "react";
import { styled } from "styled-components";
import happy from "../../assets/satisfied.svg";
import adjust from "../../assets/adjust.svg";
import personalised from "../../assets/personalised.svg";

function Benefits() {
  return (
    <StyledBenefits>
      <StyledHead>
        <StyledTitle>Why Portals?</StyledTitle>
        <StyledParagraph>
          Start your tech career armed with a roadmap filled with courses,
          books, videos to use
        </StyledParagraph>
      </StyledHead>
      <StyledBody>
        <StyledPoint>
          <StyledIcon src={personalised} />
          <StyledPuncher>Personalized to your learning style</StyledPuncher>
          <StyledText>
            Tell us your learning style whether text, video or audio or a blend
            of all and we will find content that fits you like a glove
          </StyledText>
        </StyledPoint>
        <StyledPoint>
          <StyledIcon src={adjust} />
          <StyledPuncher>Adjustable roadmap</StyledPuncher>
          <StyledText>
            Even though we guide you on your career journey, you have the reins.
            So tweak the roadmap as you deem fit.
          </StyledText>
        </StyledPoint>
        <StyledPoint>
          <StyledIcon src={happy} />
          <StyledPuncher>Predictable learning path</StyledPuncher>
          <StyledText>
            No need to stay awake at night worried about what you will learn
            tomorrow. You know what you&apos; be learning in months today!
          </StyledText>
        </StyledPoint>
      </StyledBody>
    </StyledBenefits>
  );
}

export default Benefits;

const StyledBenefits = styled.div`
  min-height: 400px;
  margin: 50px 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
`;
const StyledHead = styled.div`
  text-align: center;
  padding: 0 10px;
  margin-bottom: 2.5rem;
`;
const StyledTitle = styled.h2`
  font-size: 2.3rem;
  margin-bottom: 20px;
`;
const StyledParagraph = styled.p`
  font-size: 1.3rem;
`;
const StyledBody = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  min-height: 300px;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    width: 100%;
  }
`;
const StyledPoint = styled.div`
  width: 100%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const StyledIcon = styled.img`
  filter: brightness(0) saturate(100%) invert(81%) sepia(87%) saturate(222%)
    hue-rotate(41deg) brightness(98%) contrast(79%);
  align-self: center;
`;
const StyledPuncher = styled.h3`
  margin-bottom: 10px;
  align-self: center;
  font-size: 1.7rem;
  padding-inline: 2px;
`;
const StyledText = styled.p`
  padding-inline: 10px;
`;
