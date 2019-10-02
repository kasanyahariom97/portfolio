import React from 'react'
import styled from 'styled-components';
import ManSvg from '../assets/man.svg';
import Colors from '../constants/Colors';

const Photo = styled.div`
   img {
      width: 250px;
      height: auto;
      border: 7px solid ${Colors.primaryColor};
      border-radius: 50%;
      background-color: ${Colors.primaryColor};
      @media (max-width: 820px){
         width: 200px;
      }
   }
`

const Picture = props => {
   return (
      <Photo id="right">
         <img src={ManSvg} alt="my" />
      </Photo>
   )
}

export default Picture;