import React from 'react'
import { ReactContext } from '../Context';
import styled from 'styled-components';

const ButtonContainer = styled.div`
   position: fixed;
   top: 1rem;
   right: 1rem;
   z-index: 56;
   button {
      display: block;
      opacity: 0.6;
      width: 1.5rem;
      height: 1.5rem;
      border: 3px solid white;
      background: #2e2e2e;
      border-radius: 4px;
      color: white;
   }
`

const ColorSwitcher = () => {
   const myContext = React.useContext(ReactContext);
   return (
      <ButtonContainer>
         <button onClick={(e) => myContext.switch()}></button>
      </ButtonContainer>
   )
}

export default ColorSwitcher
