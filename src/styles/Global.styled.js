import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    //border: 1px solid red !important;
  }


  * {
    margin: 0;
  }

  html {
    font-size: 62.5%;
  }

  html, body {
    //height: 100%;
    font-family: 'Inter', sans-serif;
    width: 100vw;
    height: 100vh;
    position: relative;
  }


  body {
    font-size: 1.6rem;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #C6C6C6;
    background: white;
    //background: linear-gradient(90deg, rgba(1, 2, 32, 1) 0%, rgba(3, 3, 21, 1) 100%);
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }

  button {
    cursor: pointer;
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

`;
