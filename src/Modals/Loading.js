import React from "react";
import styled from "styled-components";
import Logo from "./Name";
import { Spring } from "react-spring/renderprops";
import { ReactContext } from "../Context";

const LoadingComponent = styled.div`
  background: ${props => props.bg};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingModel = styled.div`
  background: ${props => props.bg};
  width: 350px;
  height: 200px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 12px ${props => props.bg};
  justify-content: center;
  align-items: center;
  color: ${props => props.color};

  @media (max-width: 620px) {
    width: 90%;
  }

  div.wrapper {
    margin: 2rem 0;
    width: 90%;
    background: ${props => props.bgOne};
    height: 7px;
    border-radius: 3px;
    display: flex;
    align-items: center;

    div.inner {
      height: 5px;
      border-radius: 3px;
      background: ${props => props.bgTwo};
      animation-name: myAnimation;
      animation-delay: 340;
      animation-fill-mode: forwards;
      animation-duration: 2s;
      animation-timing-function: ease-in-out;
    }
  }
`;

const Loading = () => {
  const myContext = React.useContext(ReactContext);
  return (
    <LoadingComponent bg={myContext.mode.backColor}>
      <Spring
        from={{ opacity: 0, marginTop: 20 }}
        to={{ opacity: 1, marginTop: 0 }}
        config={{ delay: 200, duration: 300 }}
      >
        {e => (
          <LoadingModel
            style={e}
            bg={myContext.mode.navColor}
            color={myContext.mode.fontColor}
            bgOne={myContext.mode.backColor}
            bgTwo={myContext.mode.primaryColor}
          >
            <Logo>Please Wait...</Logo>
            <div className="wrapper">
              <div className="inner"></div>
            </div>
          </LoadingModel>
        )}
      </Spring>
    </LoadingComponent>
  );
};

export default Loading;
