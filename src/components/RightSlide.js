import React from "react";
import styled from "styled-components";
import { DiJsBadge, DiReact, DiNodejsSmall, DiMongodb } from "react-icons/di";
import { Spring } from "react-spring/renderprops";
import { ReactContext } from '../Context';

const RightContainer = styled.div`
  font-size: 12rem;
  svg {
    opacity: 0.5;
  }
  color: ${props => props.color};
  @media (max-width: 820px) {
    svg {
      opacity: 0.05;
    }
  }
`;

const RightSlide = props => {
  const slidesArray = [
    <DiJsBadge />,
    <DiReact />,
    <DiNodejsSmall />,
    <DiMongodb />
  ];
  let currentInterval = 0;
  const totalInterval = 3;
  const [currentSlide, setCurrentSlide] = React.useState(
    slidesArray[currentInterval]
  );
  const myContext = React.useContext(ReactContext);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (currentInterval === totalInterval) {
        currentInterval = 0;
        setCurrentSlide(slidesArray[currentInterval]);
      } else {
        currentInterval++;
        setCurrentSlide(slidesArray[currentInterval]);
      }
    }, 20000);
    return () => clearInterval(interval);
  }, [currentInterval]);

  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 400, duration: 500 }}
    >
      {e => (
        <RightContainer style={e} id="right" color={myContext.mode.primaryColor}>
          {currentSlide}
        </RightContainer>
      )}
    </Spring>
  );
};

export default RightSlide;
