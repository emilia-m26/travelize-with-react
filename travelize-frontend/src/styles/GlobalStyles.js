import { createGlobalStyle }  from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    background-image: url('images/pattern-back-2.jpg');
    background-position: center;
    background-size: cover;
  }
  div {
    background: white;
  }
`;

export default GlobalStyles;
