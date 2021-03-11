import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles'

const ContentStyles = styled.div`
    background: white;
    padding: 2rem;
`;

export default function Layout({ children }) {
    return (
        <>
            <GlobalStyles />
           
            <ContentStyles>
              
               {children}
               
            </ContentStyles>
           
        </>
    )
   };