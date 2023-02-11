import styled from "styled-components";
import { flexy, fontSize } from "./GlobalStyle";

export const PageContainer = styled.div`
  //STANDARD PAGE CONTAINER
  ${flexy("center")}
  height: 90vh;
  margin-top: 10vh;
  padding: 2rem;
  box-sizing: border-box;
  //PAGE CONTAINER MEDIA QUERIES
  @media only screen and (max-width: 1023px), screen and (max-height: 841px) {
    height: auto;
    overflow-y: scroll;
  }
  @media only screen and (max-width: 1023px) {
    margin-top: 100px;
  }
`;

//3 BOX LAYOUTS
export const Three_T4_8B12 = styled.div`
  //ABOUT PAGE LAYOUT
  position: relative;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  ${flexy("center")};
  flex-direction: row;
  flex-wrap: wrap;
  //BOXES
  .box1,
  .box2,
  .box3 {
    box-sizing: inherit;
    overflow: hidden;
    min-height: 300px;
    height: 50%;
  }
  //BOX1
  .box1 {
    width: 30%;
  }
  //BOX2
  .box2 {
    background: red;
    width: 70%;
  }
  //BOX3
  .box3 {
    background: blue;
    width: 100%;
  }
  //ABOUTPAGE LAYOUT MEDIA QUERIES
  @media only screen and (max-width: 1023px) {
    ${flexy("center")};
    margin-top: 2rem;
    height: auto;
    margin-bottom: 2rem;
    //BOXES
    .box1,
    .box2,
    .box3 {
      margin-bottom: 2rem;
    }
    //BOX1
    .box1 {
      ${flexy("center")};
      width: 100%;
      height: auto;
    }
    //BOX2
    .box2 {
      ${flexy("center")};
      background: red;
      width: 100%;
      height: auto;
    }
    //BOX3
    .box3 {
      ${flexy("center")};
      background: blue;
      width: 100%;
      height: auto;
    }
  }
`;
