import React from 'react';
import styled from 'styled-components';
//import { createGlobalStyle } from 'styled-components';


// const GlobalStyle = createGlobalStyle`
// body {
//     background-color: blue;
// }
// `;

const AboutStyles = styled.div`
    background: url('images/about.jpg');
    background-size: cover;
    background-position: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    color: white;
    div {
        background-color: lightGrey;
        
    }
    .blue {
        color: gold;
    }
   
`;
export default function About() {
    return (
        <AboutStyles>
            <div className="red">
            I am the about page
            </div>
            <div className="blue">
            I am the about page
            I am the about page
            </div>
            I am the about page
        </AboutStyles>
        
    )
}
