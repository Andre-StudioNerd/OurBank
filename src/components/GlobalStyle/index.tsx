import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
  }

  html,
  body,
  #root {
    width: 100%;
    min-width: 0;
    min-height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    min-height: 100vh;
    overflow-x: hidden;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
