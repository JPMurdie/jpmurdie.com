import styled from "styled-components";
import { flexy, fontSize } from "./GlobalStyle";

//NESTED FOOTER STYLES
export const FooterBlock = styled.div`
  //BASED STYLINGS
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 0.5;
  width: 100%;
  max-height: 10vh;
  background-color: #2e2e30;
  ${flexy({ jc: "space-between" })}
  ${fontSize(1.6, 1, 2)}
  box-sizing: border-box;
  padding: 2rem 10% 2rem 10%;
  color: var(--textColor);
  //FOOTER
  footer{
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    max-height: 80%;
    padding: 2rem;
    border-radius: 10px;
    background-color: var(--feature-background);
    .link-wrapper{
      max-height: 50%;
      display: inherit;
      align-items: justify;
    }
    a {
      border-radius: 10px;
      margin: 0 1rem;
      padding: 1rem 1rem;
      text-decoration: none;
      color: var(--textColor);
      transition: 1s ease-in-out;
      border: 5px solid var(--feature-background);
      :hover {
        border-bottom: 5px solid var(--background);
        border-top: 5px solid var(--background);
        border-radius: 0px;
      }
    }
  }
  //RESPONSIVE NAV BUTTONS
  .foot-btn {
    padding: 0.5rem;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    color: var(--textColor);
    display: none;
    visibility: hidden;
    opacity: 0;
    ${fontSize(2.4, 1.5, 4.6)}
  }
`;
