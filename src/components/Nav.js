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
      <h3>
        <a>JPMurdie</a>
      </h3>
      <nav ref={navRef}>
        <a href="">My Work</a>
        <a href="">My CV</a>
        <a href="">Blog</a>
        <a href="">Contact</a>
        <button className="nav-btn nav-close-btn" onClick={showNav}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNav}>
        <FaBars />
      </button>
    </NavHeader>
  );
}

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
  nav a {
    margin: 0 2rem;
    padding: 1rem 2rem;
    text-decoration: none;
    color: var(--textColor);
    transition: 1s ease-in-out;
    :hover {
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
    visibility: hidden;
    opacity: 0;
    font-size: 1.8rem;
  }
  //Reponsive Elements
  @media only screen and (max-width: 1024px) {
    .nav-btn {
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
      transform: translateY(-100vh);
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
