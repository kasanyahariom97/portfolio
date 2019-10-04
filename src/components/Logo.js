import React from 'react'
import styled from 'styled-components';

const LogoContainer = styled.h1`
   font-weight: 500;
   margin: 0;
   position: fixed;
   padding: 2px;
   top: 1.8rem;
   left: 1rem;
   z-index: 60;
   @media (max-width: 820px){
      top: 2.3rem;
   }
`

const Logo = () => {
   return (
      <LogoContainer className='logo-main'>
         Harry
      </LogoContainer>
   )
}


export default Logo
