import React from 'react';
import styled from 'styled-components';
import { ReactContext } from '../Context';
import Button from './StyledButton';
import { FiEye } from 'react-icons/fi';

const Container = styled.div`
   width: 270px;
   height: 250px;
   position: relative;
   overflow: hidden;

   @media (max-width: 720px) {
      width: 50%;
      margin: 0 auto;
   }

   @media (max-width: 690px) {
      width: 65%;
   }

   @media (max-width: 610px) {
      width: 100%;
   }

   div.first {
      width: 100%;
      height: 100%;
      img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
   }

   div.second {
      transition: 0.2s;
      position: absolute;
      top: -250px;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${props => props.bg};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .heading {
         font-size: 1.3rem;
      }
   }

   &:hover {
      div.second {
         top: 0;
      }
   }

   button {
      cursor: pointer;
   }
`

const Project = (props) => {
   const myContext = React.useContext(ReactContext);
   return (
      <Container bg={myContext.mode.backColorTrans}>
      <div className="first">
         <img src={props.img} alt="project" />
      </div>
      <div className="second">
         <h5 className="heading">{props.title}</h5>
         <Button color={myContext.mode.primaryColor} hvColor={myContext.mode.backColor}>
            <a href={props.url}>
               View&nbsp;<FiEye />
            </a>
         </Button>
      </div>
      </Container>
   )
}

export default Project
