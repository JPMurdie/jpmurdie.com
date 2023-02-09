import React from "react";
import styled from "styled-components";
import { PageContainer, Three_T4_8B12 } from "../components/PageStyles";
//Images
import lensaImage from "../img/about-img.jpg";

const About = () => {
  return (
    <PageContainer>
      <Three_T4_8B12>
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>
      </Three_T4_8B12>
    </PageContainer>
  );
};

export default About;
