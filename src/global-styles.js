import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -mos-osx-font-smoothing: grayscale;
    background-color: black;
    color: #333333;
    font-size: 16px;
    font-weight: 700;
    margin: 0;
  }
`;
