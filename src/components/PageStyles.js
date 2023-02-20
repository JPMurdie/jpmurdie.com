import styled from "styled-components";
import { flexy, fontSize } from "./GlobalStyle";

export const PageContainer = styled.div`
  //STANDARD PAGE CONTAINER
  ${flexy("center")}
  height: 90vh;
  margin-top: 10vh;
  padding: 2rem;
  box-sizing: border-box;
  color: var(--textColor);
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
export const THREE_T4_8B12 = styled.div`
  //THREE_T4_8B12 LAYOUT
  position: relative;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  ${flexy("center")};
  flex-direction: row;
  flex-wrap: wrap;
  //BOXES
  .box {
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

//4 BOX LAYOUTS
export const SIX_T1_B1N4 = styled.div`
  // FOUR_T2_B2 LAYOUT
  position: relative;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  ${flexy("center")};
  flex-direction: row;
  flex-wrap: wrap;
  Overflow: hidden;
  .logo {
    text-decoration: none;
    font-family: "Lobster", cursive;
    color: var(--logo-text);
    -webkit-text-stroke: 1px var(--textColor);
    ${fontSize(2.4, 1.5, 4.6)}
    cursor: pointer;
  }
  //BOXES
  //BOX1
  .box1 {
    position: relative;
    ${flexy("center")};
    width: 100%;
    height: 20%;
  }
  .box2 {
    position: relative;
    ${flexy("center")};
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 80%;
    background-color: lightblue;
    .box2_1{
      ${flexy("center")};
      width: 50%;
      height: 50%;
      background-color: red;
    }
    .box2_2{
      ${flexy("center")};
      width: 50%;
      height: 50%;
      background-color: grey;
    }
    .box2_3{
      ${flexy("center")};
      width: 50%;
      height: 50%;
      background-color: green;
    }
    .box2_4{
      ${flexy("center")};
      width: 50%;
      height: 50%;
      background-color: yellow;
    }
  }
  @media only screen and (max-width: 1023px) {
    .box2 {
      flex-direction: column;
      height: auto;
      .box2_1{
      ${flexy("center")};
      width: 100%;
      height: 50%;
      min-height: 250px;
      background-color: red;
    }
    .box2_2{
      ${flexy("center")};
      width: 100%;
      height: 50%;
      min-height: 250px;
      background-color: grey;
    }
    .box2_3{
      ${flexy("center")};
      width: 100%;
      height: 50%;
      min-height: 250px;
      background-color: green;
    }
    .box2_4{
      ${flexy("center")};
      width: 100%;
      height: 50%;
      min-height: 250px;
      background-color: yellow;
    }
    }
  };
`;
