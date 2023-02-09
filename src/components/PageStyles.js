import styled from "styled-components";
import { flexy, fontSize } from "./GlobalStyle";

export const PageContainer = styled.div`
  //STANDARD PAGE CONTAINER
  ${flexy("center")}
  height: 90vh;
  //PAGE CONTAINER MEDIA QUERIES
  @media only screen and (max-width: 1023px) {
    min-height: 90vh;
    overflow: scroll;
    overflow-y: scroll;
  }
  @media only screen and (max-height: 900px) {
    min-height: 90vh;
    overflow: scroll;
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
  box-sizing: border-box;
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
    max-height: 50%;
  }
  //BOX1
  .box1 {
    background: green;
    width: 30%;
    height: 50%;
  }
  //BOX2
  .box2 {
    background: red;
    width: 70%;
    height: 50%;
  }
  //BOX3
  .box3 {
    background: blue;
    width: 100%;
    height: 50%;
  }
  //ABOUTPAGE LAYOUT MEDIA QUERIES
  @media only screen and (max-width: 1023px) {
    overflow-y: scroll;
    //BOXES
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
