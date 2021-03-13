import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';

//only will apply to this component - scoped styles
const NavStyles = styled.nav`
    //margin-bottom: 3rem;
    .logo {
        transform: translateY(-35%);
    }
    ul {
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        grid-gap: 2rem;
        align-items: center;
        text-align: center;
        list-style: none;
        margin-top: -4.5rem;
    }
    li {
        --rotate: -3deg;
        transform: rotate(var(--rotate));
        &:hover {
            --rotate: 3deg;
        }
    }

    a{
        font-size: 2rem;
        color: #262626;
        text-decoration: none;   
        &:hover {
            color: teal;
        }
    }
`;

export default function Nav() {
    return ( 
        <NavStyles>
            <ul>
                <li><Link to="/goals/">Goals</Link></li>
                <li><Link to="/"><Logo /></Link></li>
                <li><Link to="/passport">Passport</Link></li>
            </ul>
        </NavStyles>
    );
}