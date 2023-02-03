import React, { useState } from "react";
import styled from "styled-components";
import Media from "react-media";

const Nav = () => {
  const [showNav, setShowNav] = useState(true);

  return (
    <StyledNav>
      <Logo>
        <h1>JPMurdie</h1>
      </Logo>
      <Media query="(min-width: 600px)">
        {(matches) => {
          return matches ? (
            <NavList>
              <ul>
                <li>
                  <a href="#">My Work</a>
                </li>
                <li>
                  <a href="#">My CV</a>
                </li>
                <li>
                  <a href="#">Shits & Giggles</a>
                </li>
                <li>
                  <a href="#">Contact Me</a>
                </li>
              </ul>
            </NavList>
          ) : (
            <>
              {!showNav && (
                <BurgerButton>
                  <button onClick={() => setShowNav(true)}>Burger</button>
                </BurgerButton>
              )}
              {showNav && (
                <BurgerNav>
                  <BurgerButton>
                    <button onClick={() => setShowNav(false)}>
                      Close Navbar
                    </button>
                  </BurgerButton>
                  <h1>Dashboard</h1>
                  <h2>Menu item</h2>
                  <h2>Menu item</h2>
                  <h2>Menu item</h2>
                </BurgerNav>
              )}
            </>
          );
        }}
      </Media>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: ${(showNav) => (showNav === true ? "100vh" : "10vh")};
  margin-bottom: 10vh;
  background: #301e67;
  box-shadow: 0px 10px 50px #b6eada;
  a {
    border-radius: 10px;
    padding: 1rem;
    background-color: #03001c;
    color: #b6eada;
    text-decoration: none;
    font-size: 1rem;
    font-weight: lighter;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    position: relative;
  }
`;

const Logo = styled.div`
  h1 {
    color: #5b8fb9;
    -webkit-text-stroke: 1px #b6eada;
    font-size: 2.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
`;

const BurgerButton = styled.div`
  padding: 1rem;
`;

const BurgerNav = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-content: center;
  align-items: center;
  background: #301e67;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  transition: all 0.5s ease;
`;

const NavList = styled.div`
  display: flex;
`;

export default Nav;
