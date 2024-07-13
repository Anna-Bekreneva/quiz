import { Global, css } from '@emotion/react'

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  :root {
    --white: #fff;
    --black: #000;
    --light-100: #dad4d4;
    --red-300: #f86e6e;
    --red-500: #e04040;
    --red-800: #8c3535;
    --dark-600: #2c1313;
    --dark-800: #1e0d0d;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  ul,
  ol {
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font: inherit;
  }

  img {
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    color: inherit;
    font: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  address {
    font-style: normal;
  }

  button,
  input,
  textarea {
    display: inline-block;
    padding: 0;
    background-color: transparent;
    border: 0;
  }

  button {
    cursor: pointer;
    appearance: none;
  }

  input {
    margin: 0;
  }

  fieldset {
    margin: 0;
    padding: 0;
    border: 0;
  }

  legend {
    padding: 0;
  }

  picture {
    line-height: 0;
  }

  label {
    cursor: pointer;
  }

  body {
    margin: 0;
    color: var(--dark-800);
    font-weight: 400;
    font-family: Roboto, Arial, sans-serif;
    line-height: 1.3;
    background-color: var(--white);
    font-size: 16px;
  }

  .error {
    color: var(--red-500);
    text-align: center;
  }
`

export const GlobalStyles = () => <Global styles={globalStyles} />
