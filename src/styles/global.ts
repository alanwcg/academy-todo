import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #273fad;
    --green: #3fad27;
    --red: #ad273f;
    --background: #ebebeb;
    --shapes: #ffffff;
    --text-title: #3d3d4d;
    --text: #1c1c29;
    --text-light: #a09cb1;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 16px "Poppins", Arial, sans-serif;
    color: #121212;
  }

  input, textarea {
    font-family: "Poppins", Arial, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;