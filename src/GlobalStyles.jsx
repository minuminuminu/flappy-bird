import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Zen Loop', cursive;
  }
  
  body {
    width: 100vw;
    height: 100vh;
    background-image: url('/images/background.png');
    background-repeat: no-repeat;
    background-size: cover
  }
`;
