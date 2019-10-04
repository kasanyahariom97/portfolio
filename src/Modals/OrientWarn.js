import React from "react";
import styled from "styled-components";
import { ReactContext } from "../Context";
import { FiRefreshCcw } from "react-icons/fi";

const Centered = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 5rem;
  flex-direction: column;
  color: ${props => props.accent};
  background: ${props => props.bg};
  p {
    font-size: 1.4rem;
    color: ${props => props.color};
  }
`;

const OrientWarn = props => {
  const myContext = React.useContext(ReactContext);
  return (
    <Centered
      color={myContext.mode.fontColor}
      bg={myContext.mode.backColor}
      accent={myContext.mode.primaryColor}
    >
      <FiRefreshCcw />
      <p>Rotate</p>
    </Centered>
  );
};

export default OrientWarn;
