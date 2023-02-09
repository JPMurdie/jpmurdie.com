import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import Media from "react-media";
import { FaBars, FaTimes } from "react-icons/fa";
import GlobalStyle from "./GlobalStyle";
import { NavHeader } from "./NavStyles";

function Nav() {
  const navRef = useRef();

  const showNav = () => {
    console.log(navRef);
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <NavHeader>
      <div id="logo">
        <a>JPMurdie</a>
      </div>
      <nav ref={navRef}>
        <a href="">My Work</a>
        <a href="">My CV</a>
        <a href="">Shits & Giggles</a>
        <a href="">Contact Me</a>
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

export default Nav;
