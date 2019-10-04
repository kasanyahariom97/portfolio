import React from 'react'
import { ReactContext } from '../Context';
import styled from 'styled-components';
import { FiWind, FiSun, FiMoon } from 'react-icons/fi'

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
      border: none;
      background: transparent;
      font-size: 1.4rem;
      border-radius: 4px;
      color: ${props => props.color};

      &:focus {
         outline: none;
      }

      &:active {
         outline: none;
      }
   }
`

const ColorSwitcher = () => {
   const myContext = React.useContext(ReactContext);
   let currentIcon = <FiWind />
   if(myContext.current === 'true'){
      currentIcon = <FiMoon />
   }else {
      currentIcon = <FiSun />
   }
   return (
      <ButtonContainer color={myContext.mode.fontColor}>
         <button onClick={(e) => myContext.switch()}>{currentIcon}</button>
      </ButtonContainer>
   )
}

export default ColorSwitcher
