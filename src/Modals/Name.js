import React from 'react'
import styled from 'styled-components';

const LogoContainer = styled.h1`
   font-weight: 500;
   margin: 0;
`

const Name = (props) => {
   return (
      <LogoContainer className='logo-main'>
         {props.children}
      </LogoContainer>
   )
}


export default Name
