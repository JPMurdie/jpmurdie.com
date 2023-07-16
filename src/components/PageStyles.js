import styled from "styled-components";
import { flexy, fontSize } from "./GlobalStyle";

export const PageContainer = styled.div`
  //STANDARD PAGE CONTAINER
  ${flexy("center")}
  box-sizing: border-box;
  flex-wrap: wrap;
  height: 80vh;
  margin-top: 10vh;
  background-color: #2e2e30;
  color: var(--textColor);
  //PAGE CONTAINER MEDIA QUERIES
  @media only screen and (max-width: 1023px), screen and (max-height: 841px) {
    overflow-y: scroll;
  }
  @media only screen and (max-width: 1023px) {
  }
`;

//3 BOX LAYOUTS
export const THREE_T4_8B12 = styled.div`
  //THREE_T4_8B12 LAYOUT
  position: relative;
  height: 100%;
  width: 80%;
  box-sizing: border-box;
  ${flexy("center")};
  flex-direction: row;
  flex-wrap: wrap;
  //BOXES
  .box {
    box-sizing: inherit;
    overflow: hidden;
  }
  //BOX1
  .box1 {
    max-height: 30%;
    width: 100%;
  }
  //BOX2
  .box2 {
    max-height: 60%;
    width: 100%;
  }
  //BOX3
  .box3 {
    height: 10%;
    width: 100%;
  }
  //ABOUTPAGE LAYOUT MEDIA QUERIES
  @media only screen and (max-width: 1023px) {
    ${flexy("center")};
    height: auto;
    //BOXES
    .box1,
    .box2,
    .box3 {
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

// X BOX LAYOUTS
export const BLOG_LINK_BOX = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(200px, 1fr));
  background-color: pink;
  width: 100%;
  height: 200px;
  min-height: 200px;
  margin-bottom: 2rem;
  .title-holder{
    grid-column: 1 / 4;
    grid-row: 1/2;
    background-color: blue;
    border: black;
  }
  .blurb-holder {
    grid-column: 1 / 4;
    grid-row: 2/5;
    background-color: red;
  }
.img-holder{
  grid-column: 4 / 5;
  grid-row: 1/5;
  background-color: green;
}
@media only screen and (max-width: 768px) {
  [class*="-holder"] {
    grid-column: auto;
    grid-row: auto;
    width: 100%;
  }
  [class*="title-"] {
    grid-row: 1 / 2;
  }
  [class*="blurb-"] {
    grid-row:  3/4;
  }
  [class*="img-"] {
    grid-row: 2/3;
    
  }
}
`
