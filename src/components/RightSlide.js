import React from "react";
import Colors from "../constants/Colors";
import styled from "styled-components";
import { DiJsBadge, DiReact, DiNodejsSmall, DiMongodb } from "react-icons/di";
import { Spring } from "react-spring/renderprops";

const RightContainer = styled.div`
  opacity: 0.5;
  font-size: 12rem;
  color: ${Colors.primaryColor};
  @media (max-width: 820px) {
   display: none;
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
        <RightContainer style={e} id="right">
          {currentSlide}
        </RightContainer>
      )}
    </Spring>
  );
};

export default RightSlide;
