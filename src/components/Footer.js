import React, { useRef } from "react";
import styled from "styled-components";
import { FooterBlock } from "./FooterStyles";
//Router
import { Link } from "react-router-dom";
//Images

function Footer() {

  return (
    <FooterBlock>
      <footer>
        <div className="link-wrapper">
        <FooterLink className="link" to="https://twitter.com/TerribleMurdz" target="_blank">
          My Twitter
        </FooterLink>
        </div>
      </footer>
    </FooterBlock>
  );
}

const FooterLink = styled(Link)`
  text-decoration: none;
  a {
    margin-left: 0;
  }
`;

export default Footer;