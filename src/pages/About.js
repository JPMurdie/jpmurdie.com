import React from "react";
import styled from "styled-components";
//Images
import lensaImage from "../img/about-img.jpg";

const About = () => {
  return (
    <AboutContainer>
      <AboutContainerTop>
        <AboutImg>
          <img src={lensaImage} alt="" />
        </AboutImg>
        <AboutText>
          <h3>About Me</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            repellat placeat dicta consectetur esse quod saepe accusamus rerum,
            at ex, cupiditate ducimus repudiandae id rem obcaecati quibusdam
            soluta, quidem maiores doloribus nam. Odio blanditiis ex voluptate
            ratione consequatur impedit doloremque laudantium eos iure quo! Quod
            quis culpa molestiae. Quaerat, mollitia.
          </p>
        </AboutText>
      </AboutContainerTop>
      <AboutContainerBottom>
        <AboutText>
          <h3>My Skills:</h3>
        </AboutText>
      </AboutContainerBottom>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 80vw;
  margin: auto;
`;

const AboutContainerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 100%;
  padding: 2rem;
  margin-top: 2rem;
`;

const AboutContainerBottom = styled.div`
  display: flex;
  height: 50%;
  padding: 2rem;
  margin-top: 2rem;
`;

const AboutText = styled.div`
  position: relative;
  min-width: 60%;
  height: 100%;
  margin-left: 2rem;
  h3 {
    color: #b6eada;
  }
  p {
    color: #b6eada;
  }
`;

const AboutImg = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40%;
  img {
    border: solid 2px #b6eada;
    border-radius: 50%;
    max-width: 80%;
    max-height: 80%;
    object-fit: cover;
  }
`;

export default About;
