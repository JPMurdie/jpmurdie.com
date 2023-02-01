import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1 id="logo">JPMurdie</h1>
      <ul>
        <li>
          <a href="#">My Work</a>
        </li>
        <li>
          <a href="#">Shits & Giggles</a>
        </li>
        <li>
          <a href="#">Contact Me</a>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
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
  #logo {
    color: #5b8fb9;
    -webkit-text-stroke: 1px #b6eada;
    font-size: 2.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export default Nav;
