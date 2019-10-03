import React from "react";
import styled from "styled-components";
import { Spring } from "react-spring/renderprops";
import { ReactContext } from '../Context';
import { dark } from "../constants/Colours";

const MainHeading = styled.h1`
  font-weight: 800;
  font-size: 3.5rem;
  line-height: 3rem;
  margin: 0px;
  color: ${props => props.color};
  span {
    font-weight: 800;
    font-size: 3.5rem;
    line-height: 3rem;
    margin: 0px;
    div {
      display: inline-block;
      font-weight: 800;
      font-size: 3.5rem;
      line-height: 3rem;
      margin: 0px;

      .myClass {
        color: ${props => props.color};
        font-weight: lighter;
      }
    }
  }
  @media (max-width: 820px) {
    font-size: 2rem;
    span {
      font-size: 2rem;
      div {
      font-size: 2rem;
      }
    }
  }
`;

const BottomLine = styled.h2`
  font-weight: 600;
  font-size: 1rem;
  margin: 0;
  margin-top: 1rem;
  color: ${dark.darkColor};
`;

const Content = styled.div`
  width: 500px;
  div.para {
    font-size: 15px;
    line-height: 1.8rem;
    font-weight: 550;
    color: ${props => props.color};
  }
  @media (max-width: 820px) {
    width: 100%;
  }
`;

const Header = props => {
  const myContext = React.useContext(ReactContext);
  return (
    <Content color={myContext.mode.fontColor}>
      <Spring
        from={{ opacity: 0, marginTop: 20 }}
        to={{ opacity: 1, marginTop: 0 }}
        config={{ delay: 300, duration: 400 }}
      >
        {e => (
          <div style={e} className="para">
            {props.children}
          </div>
        )}
      </Spring>
    </Content>
  );
};

const Heading = props => {
  const myContext = React.useContext(ReactContext);
  return (
    <>
      <MainHeading color={myContext.mode.fontColor}>{props.children}</MainHeading>
      <BottomLine>{props.bottom}</BottomLine>
    </>
  );
};

export { Heading };

export default Header;
