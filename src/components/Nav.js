import React, { useRef } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavHeader } from "./NavStyles";
//Router
import { Link } from "react-router-dom";
//Images

function Nav() {
  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.add("responsive_nav");
    navRef.current.classList.remove("mobile_responsive_nav");
  };

  const hideNav = () => {
    navRef.current.classList.add("mobile_responsive_nav");
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <NavHeader>
      <nav ref={navRef}>
        <div className="link-wrapper">
        <NavLink className="link" to="/mywork" onClick={hideNav}>
          My Work
        </NavLink>
        <NavLink className="link" to="/blog" onClick={hideNav}>
          Blog
        </NavLink>
        <NavLink className="link" to="/contactme" onClick={hideNav}>
          Contact Me
        </NavLink>
        <button className="nav-btn nav-close-btn" onClick={hideNav}>
          <FaTimes />
        </button>
        </div>
      </nav>
      <button className="nav-btn" onClick={showNav}>
        <FaBars />
      </button>
    </NavHeader>
  );
}

const NavLink = styled(Link)`
  text-decoration: none;
  a {
    margin-left: 0;
  }
`;

export default Nav;
