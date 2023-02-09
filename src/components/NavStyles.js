import styled from "styled-components";
import { flexy, fontSize } from "./GlobalStyle";

//NESTED NAV STYLES
export const NavHeader = styled.div`
  //BASED STYLINGS
  ${flexy({ jc: "space-between" })}
  ${fontSize(1.6, 1, 2)}
  box-sizing: border-box;
  min-height: 10vh;
  padding: 1rem 10%;
  background-color: var(--feature-background);
  color: var(--textColor);
  //LOGO
  #logo {
    font-family: "Lobster", cursive;
    color: var(--logo-text);
    -webkit-text-stroke: 1px var(--textColor);
    ${fontSize(2.4, 1.5, 4.6)}
    cursor: pointer;
  }
  //NAV
  nav {
    display: flex;
    flex-direction: row;
    a {
      border-radius: 10px;
      margin: 0 1rem;
      padding: 1rem 1rem;
      text-decoration: none;
      color: var(--textColor);
      transition: 1s ease-in-out;
      border: 5px solid var(--feature-background);
      :hover {
        border: 5px solid var(--background);
        background-color: var(--textColor);
        color: var(--background);
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
    font-size: 1.8rem;
  }

  //media Queries
  @media only screen and (max-width: 1023px) {
    height: auto;
    padding: 1rem 0rem;
    //LOGO LESS THAN 1023PX
    #logo {
      ${fontSize(2, 2.5, 4)}
      ${flexy({ jc: "left" })}
      margin-left: 2rem;
      width: 100%;
    }
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
      width: 20%;
      align-items: center;
      display: inline;
      visibility: visible;
      opacity: 1;
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
  }
`;
