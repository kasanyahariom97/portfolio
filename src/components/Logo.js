import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {ReactContext} from '../Context';

const LogoContainer = styled.h1`
   font-weight: 500;
   margin: 0;
   position: fixed;
   padding: 2px;
   top: 1.8rem;
   left: 1rem;
   z-index: 60;
   a{
      color: ${props => props.color};
      text-decoration: none;
      &:hover {
         text-decoration: none;
      }
   }
   @media (max-width: 820px){
      top: 2.3rem;
   }
`

const Logo = () => {
   const myContext = React.useContext(ReactContext);
   return (
      <LogoContainer className='logo-main' color={myContext.mode.fontColor}>
         <Link to="/">Harry</Link>
      </LogoContainer>
   )
}


export default Logo
