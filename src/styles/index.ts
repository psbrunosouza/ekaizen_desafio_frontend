import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #EBEFF6;
    color: #454545;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  h1 {
    font-size: 18px;
    line-height: 32px;
  }

  button {
    cursor: pointer;
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    font-size: 26px;
  }

  a {
    text-decoration: none;
    color: #454545;
  }
`;

const Sidebar = styled.section`
  height: 100%;
  width: 64px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #393839;
`;

export { GlobalStyle, Sidebar }