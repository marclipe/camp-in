import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* border: 1px solid red; */
    text-decoration: none;
  }

  :root {
    --fontPoppins: 'Poppins', sans-serif;
  }

  :focus {
    outline: 2px solid #41A55B;
  }

  body {
    background-color: ${(props) => props.theme.backgroundColorMobile};
    --webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: var(--fontPoppins);
  }
`
