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
        <div className="box2">
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
  height: 100%;
  padding: 1rem;
  p {
    height: 100%;
    overflow: hidden;
    flex-shrink: 1;
  }
`;

export default About;
