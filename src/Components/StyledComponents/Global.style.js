import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


  * {
    box-sizing: border-box;
  }

  

  html{
    width: 100%;
  }

  body {
    font-family: Georgia,cursive;
    font-size: 1.15em;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
  }

  img {
    width: 100%;
}
`;