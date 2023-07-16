import React from "react";
import styled from "styled-components";
import { PageContainer, THREE_T4_8B12 } from "../components/PageStyles";
import { flexy } from "../components/GlobalStyle";
//Images
import lensaImage from "../img/about-img.jpg";
import logo from "../img/logo.png";

const About = () => {
  return (
    <PageContainer>
      <THREE_T4_8B12>
        <div className="box box1">
          <AboutContentContainer>
            <img src={logo} alt="" />
          </AboutContentContainer>
        </div>
        <div className="box box2">
          <AboutContentContainer>
            <p>
              Welcome to my website. I'm a Esports enthusiast and a frontend web developer. 
              Stay here for updates on my journey to becoming a professional. I will be starting to stream shortly. 
              The ethos around my content is 'You must at first be terrible and accept that in order to improve. This site is very much a work in progress, responsiveness is dodgy at the moment.'
            </p>
          </AboutContentContainer>
        </div>
        <div className="box box3">
          <AboutContentContainer>
          </AboutContentContainer>
        </div>
      </THREE_T4_8B12>
    </PageContainer>
  );
};

const AboutContentContainer = styled.div`
  ${flexy("center")};
  box-sizing: border-box;
  height: 100%;
  padding: 2rem;
  margin-bottom: 1rem;
  img {
    box-sizing: border-box;
    padding: 0.5rem;
    object-fit: cover;
    max-height: 200px;
    width: auto;
  }
  p {
    ${flexy("center")};
    box-sizing: border-box;
    height: 100%;
    overflow: hidden;
    margin: 0;
    flex-shrink: 1;
  }
  @media only screen and (max-width: 1023px), screen and (max-height: 841px) {
    img {
      max-height: 250px;
    }
  }
`;

export default About;
