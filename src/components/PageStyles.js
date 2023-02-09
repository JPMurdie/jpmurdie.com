import styled from "styled-components";
import { flexy, fontSize } from "./GlobalStyle";

export const PageContainer = styled.div`
  //STANDARD PAGE CONTAINER
  ${flexy("center")}
  height: 90vh;
  box-sizing: border-box;
  //PAGE CONTAINER MEDIA QUERIES
  @media only screen and (max-width: 1023px), screen and (max-height: 900px) {
    min-height: 90vh;
    overflow-y: scroll;
  }
`;

//3 BOX LAYOUTS
export const Three_T4_8B12 = styled.div`
  //ABOUT PAGE LAYOUT
  min-height: 90vh;
  height: 90vh;
  width: 100%;
  padding: 0 10%;
  ${flexy("center")};
  flex-direction: row;
  flex-wrap: wrap;
  //BOXES
  .box1,
  .box2,
  .box3 {
    position: relative;
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
    min-height: 100%;
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
      background: green;
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
