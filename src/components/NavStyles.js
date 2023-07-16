import styled from "styled-components";
import { flexy, fontSize } from "./GlobalStyle";

//NESTED NAV STYLES
export const NavHeader = styled.div`
  //BASED STYLINGS
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  max-height: 10vh;
  background-color: #2e2e30;
  ${flexy({ jc: "space-between" })}
  ${fontSize(1.6, 1, 2)}
  box-sizing: border-box;
  padding: 2rem 10% 2rem 10%;
  color: var(--textColor);
  //LOGO
  #logo {
    box-sizing: inherit;
    overflow: hidden;
    min-height: 300px;
    height: 50%;
    img{
      max-width:100%;
      height: 80px;
    }
  }
  //NAV
  nav {
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
  .nav-btn {
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

  //media Queries
  @media only screen and (max-width: 1023px) {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100px;
    border-radius: 0px;
    ${flexy({ jc: "right" })}
    //NAV LESS THAN 1023PX
    nav {
      position: fixed;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: hidden;
      opacity: 0;
      background-color: var(--feature-background);
      background-color: var(--feature-background);
      transform: translateY(100%);
      z-index: 1;
      a {
        ${fontSize(2, 2, 3)}
      }
    }
    //RESPONSIVE NAV BUTTONS LESS THAN 1023PX
    .nav-btn {
      ${flexy({ jc: "center" })}
      justify-content: center;
      width: 20%;
      align-items: center;
      display: inline;
      visibility: visible;
      opacity: 1;
      svg {
        ${flexy({ jc: "center" })}
        justify-content: center;
        align-items: center;
        margin: auto;
      }
    }
    .nav-close-btn {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }
    .responsive_nav {
      transform: none;
      transition: 1s;
      display: flex;
      opacity: 1;
    }
    .mobile_responsive_nav {
      transform: translateY(100%);
      transition: 1s;
      display: flex;
      opacity: 1;
    }
  }
`;
