import { createGlobalStyle, css } from "styled-components";

export const flexy = ({ jc }) => css`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: ${jc || "center"};
`;

export const fontSize = (min, val, max) => `
font-size: calc(1.625rem * ((100vw - 18.75em) / (1600 - 300)));
font-size: clamp(${min}rem,${val}rem + 2vw,${max}rem);
`;

const GlobalStyle = createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Aboreto&family=Inter:wght@400;700&family=Lato:wght@400;700&family=Lobster&display=swap");

:root{
    --background: #000000;
    --feature-background: #552fc7;
    --logo-text: #5b8fb9;
    --textColor: #ddd044;
}
 
html {
  /* this makes sure the padding and the border is included in the box sizing */
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow-y: scroll;
    font-size: 62.5%;
}

body {
    padding: 0;
    margin: 0;
    background: var(--background);
    overflow-y: hidden;
    font-family: 'Inter', sans-serif;
    ${fontSize(1.6, 0.5, 2.4)}
}

h2{
    margin: 0;
    padding: 0;
    font-weight: lighter;
    font-size: 4rem;
}

h4{
    font-size: 2rem;
}

p{
    margin: 0;
    padding: 0;
}

`;

export default GlobalStyle;
