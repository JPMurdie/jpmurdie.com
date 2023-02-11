import React from "react";
import styled from "styled-components";
import { PageContainer, Three_T4_8B12 } from "../components/PageStyles";
import { flexy, fontSize } from "../components/GlobalStyle";
//Images
import lensaImage from "../img/about-img.jpg";

const About = () => {
  return (
    <PageContainer>
      <Three_T4_8B12>
        <div className="box1">
          <ContentContainer>
            <img src={lensaImage} alt="" />
          </ContentContainer>
        </div>
        <div className="box2">
          <ContentContainer>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus, dolores perferendis, maxime ipsam illo impedit
              tempora consequatur itaque, architecto ducimus iure vero
              perspiciatis quam est. Expedita voluptate ad, eum repudiandae in
              temporibus debitis architecto obcaecati quam quas sed explicabo
              consectetur distinctio quae placeat esse veniam tempore possimus
              similique ea. Rerum!
            </p>
          </ContentContainer>
        </div>
        <div className="box3">
          <ContentContainer>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, ratione. Corporis recusandae amet aut distinctio,
              sunt iure asperiores obcaecati fugiat placeat quaerat nam
              doloremque earum non. Ea facere repellat officia corporis iste
              velit, accusamus, sunt temporibus atque assumenda eaque,
              exercitationem animi! Eum, quisquam. Recusandae accusantium
              dignissimos officia amet rerum alias.
            </p>
          </ContentContainer>
        </div>
      </Three_T4_8B12>
    </PageContainer>
  );
};

const ContentContainer = styled.div`
  ${flexy("center")};
  box-sizing: border-box;
  min-height: 300px;
  height: 100%;
  padding: 2rem;
  margin-bottom: 1rem;
  img {
    box-sizing: border-box;
    padding: 0.5rem;
    object-fit: cover;
    height: 100%;
    max-height: 275px;
    width: auto;
    border-radius: 50%;
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
