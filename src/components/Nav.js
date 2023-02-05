import React, { useRef, useState } from "react";
import styled from "styled-components";
import Media from "react-media";
import { FaBars, FaTimes } from "react-icons/fa";

function Nav() {
  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <NavHeader>
      <Logo>
        <a>JPMurdie</a>
      </Logo>
      <NavContainer>
        <nav ref={navRef}>
          <a href="">My Work</a>
          <a href="">My CV</a>
          <a href="">Shits & Giggles</a>
          <a href="">Contact Me</a>
          <button className="nav-btn nav-close-btn" onClick={showNav}>
            <FaTimes />
          </button>
        </nav>
      </NavContainer>
      <NavButtonContainer>
        <button className="nav-btn" onClick={showNav}>
          <FaBars />
        </button>
      </NavButtonContainer>
    </NavHeader>
  );
}

//Nav Styles
export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  a {
    cursor: pointer;
    font-family: "Lobster", cursive;
    font-size: 3rem;
    color: var(--logo-text);
    -webkit-text-stroke: 1px var(--textColor);
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 75%;
  z-index: 1;
  button {
    display: none;
  }
`;

const NavButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 0%;
`;

const NavHeader = styled.div`
  //Standard Styling
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  padding: 0 2rem;
  border-radius: 5px;
  background-color: var(--feature-background);
  color: var(--textColor);
  nav {
    width: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    flex-direction: row;
  }
  nav a {
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
  //Reponsive Elements
  @media only screen and (max-width: 1023px) {
    ${Logo} {
      width: 80%;
      align-items: center;
      justify-content: left;
      margin-left: 1rem;
      a {
        font-size: 2rem;
      }
    }

    ${NavContainer} {
      width: 0%;
    }

    ${NavButtonContainer} {
      width: 20%;
      align-items: center;
      justify-content: right;
      button {
        margin: auto;
      }
    }

    .nav-btn {
      width: 20%;
      align-items: center;
      display: inline;
      visibility: visible;
      opacity: 1;
    }

    nav {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      background-color: var(--feature-background);
      transition: 1s;
      transform: translateY(100%);
    }

    .responsive_nav {
      transform: none;
    }

    .nav-close-btn {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }

    nav a {
      font-size: 1.5rem;
    }
  }
`;

export default Nav;
