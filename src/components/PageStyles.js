import styled from "styled-components";
import { flexy, fontSize } from "./GlobalStyle";

export const PageContainer = styled.div`
  //STANDARD PAGE CONTAINER
  display: flex;
  flex-wrap: wrap;
  height: 90vh;
  padding: 0 10%;
`;
//3 BOX LAYOUTS
export const Three_T4_8B12 = styled.div`
//ABOUT PAGE LAYOUT
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  ${flexy("center")};
  flex-direction: row;
  flex-wrap: wrap;
//BOXES
.box1, .box2, .box3 {
    box-sizing: inherit;
    padding: 5%;
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
    //BOX1
  .box1 {
    background: green;
    width: 100%;
    height: auto;
  }
//BOX2
  .box2 {
    background: red;
    width: 100%;
    height: auto;
  }
//BOX3
  .box3 {
    background: blue;
    width: 100%;
    height: auto;
  }

  }
    
}
`;
