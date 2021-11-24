import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --purple: #A78BFA;
    --green: #6EE7B7;
    --blue: #60A5FA;
    --text: #374151;
    --grey: #D1D5DB;
    --lightText: #e5e5e5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    color: var(--text);
    background: rgb(167, 139, 250);
    background: linear-gradient(
      146deg,
      rgba(167, 139, 250, 1) 0%,
      rgba(110, 231, 183, 1) 100%
    );
  }

  a {
    color: var(--purple);
    text-decoration: none;
    font-size: 14px;
  }
`

export default GlobalStyle
