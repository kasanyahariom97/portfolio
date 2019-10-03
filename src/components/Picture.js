import React from "react";
import styled from "styled-components";
import { Spring } from "react-spring/renderprops";
import { ReactContext } from '../Context';

const RightContainer = styled.div`
  font-size: 12rem;
  color: ${props => props.color};
  svg {
   opacity: 0.5;
   @media (max-width: 820px) {
      opacity: 0.05;
   }
  }
  img {
    opacity: 0.5;
    width: 18rem;
    height: auto;
    @media (max-width: 820px) {
      opacity: 0.05;
   }
  }
`;

const RightSlide = props => {
  const myContext = React.useContext(ReactContext);
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 400, duration: 500 }}
    >
      {e => (
        <RightContainer style={e} id="right" color={myContext.mode.primaryColor}>
          {props.children}
        </RightContainer>
      )}
    </Spring>
  );
};

export default RightSlide;
