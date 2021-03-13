import { createGlobalStyle }  from 'styled-components';

import font from '../assets/fonts/Branda-yolq.ttf';

const GlobalStyles = createGlobalStyle`
  html {
    font-family: Branda;
    background-image: url('images/pattern-back-2.jpg');
    background-position: center;
    background-size: contain;
  }

  @font-face {
    font-family: Branda;
    src: url(${font});
  }

  //need to add class names to divs to use fonts
  // p {
  //   font-family: Arial, sans-serif;
  // }
  
`;

export default GlobalStyles;


