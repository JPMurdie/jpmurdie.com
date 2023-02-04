import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    --background: #03001c;
    --feature-background: #301e67;
    --logo-text: #5b8fb9;
    --textColor: #B6EADA;
}
    
    *, *::before, *::after {
        box-sizing: inherit;
}

html {
  /* this makes sure the padding and the border is included in the box sizing */
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow-y: hidden;
}

body {
    padding: 0;
    margin: 0;
    background: var(--background);
    overflow-y: inherit;
    font-family: 'Inter', sans-serif;
}




    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        font-family: 'Inter', sans-serif;
        &:hover{
            background-color: #23d997;
            color: white;
        }
    }

    h2{
        font-weight: lighter;
        font-size: 4rem;
    }

    h3{
        color: white;
    }

    h4{
        font-weight: bold;
        font-size: 2rem;
    }

    a{
        font-size: 1.1rem;
    }

    span{
        font-weight: bold;
        color: #23d997;  
    }

    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
`;

export default GlobalStyle;
