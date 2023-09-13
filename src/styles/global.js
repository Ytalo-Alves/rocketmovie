import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

body{
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  color: ${({theme}) => theme.COLORS.WHITE};

  -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  :root {
    font-size: 62.5%;
  }

  button, input, body, textarea {
    font-family: 'roboto slab', sans-serif;
    font-size: 1.6rem;
    outline: none;
  }
`;