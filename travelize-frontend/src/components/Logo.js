import React from 'react';
import styled from 'styled-components';
import stripes from '../assets/images/stripes2.jpg';

const LogoStyles = styled.div`
  /* This value controls the entire size of the logo*/
  font-size: 6px;
  font-size: clamp(1px, 0.65vw, 8px);
  width: 55em;
  height: 25em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  margin: 0;
  --borderSize: 1.5em;
  background: white url(${stripes});
  background-size: 100em;
  border: var(--borderSize) solid white;
  display: flex;
  .inner {
    margin: var(--borderSize);
    flex: 1;
    background: white;
    display: grid;
    grid-template-rows: 30% 1fr 1fr;
    align-content: center;
  }
  .est {
    font-size: 1.5em;
    align-self: center;
  }
  h1 {
    display: grid;
    grid-template-rows: 8fr 2fr;
    align-items: center;
    margin: 0;
    grid-row: 2 / span 2;
    grid-gap: 1em;
    transform: translateY(-0.9em);
  }
  .travelize {
    transform: scale(1.2);
    display: block;
    text-shadow: 0.18em 0.18em 0 rgba(0, 0, 0, 0.08);
    perspective: 100px;
  }
  .letter {
    font-size: 5rem;
    color: teal;
    }
}
}
`;

export default function Logo() {
  return (
    <LogoStyles className="logo">
      <div className="inner">
        
        <h1>
          <span className="travelize">
            <span className="letter T">T</span>
            <span className="letter r">r</span>
            <span className="letter a">a</span>
            <span className="letter v">v</span>
            <span className="letter e">e</span>
            <span className="letter l">l</span>
            <span className="letter i">i</span>
            <span className="letter z">z</span>
            <span className="letter e">e</span>
          </span>
          <span className="est">EST 2019</span>
        </h1>
      </div>
    </LogoStyles>
  );
}
