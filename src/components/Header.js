import React from "react";
import styled from "styled-components";
import Colors from "../constants/Colors";
import { Spring } from "react-spring/renderprops";

const MainHeading = styled.h1`
  font-weight: 800;
  font-size: 3.5rem;
  line-height: 3rem;
  margin: 0px;
  @media (max-width: 820px) {
    font-size: 2.5rem;
  }
`;

const BottomLine = styled.h2`
  font-weight: 600;
  font-size: 1rem;
  margin: 0;
  margin-top: 1rem;
  color: ${Colors.darkColor};
`;

const Content = styled.div`
  width: 500px;
  @media (max-width: 820px) {
    width: 100%;
  }
`;

const Header = props => {
  return (
    <Content>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 300, duration: 200 }}
      >
        {e => <div style={e}>{props.children}</div>}
      </Spring>
    </Content>
  );
};

const Heading = props => {
  return (
    <>
      <MainHeading>{props.children}</MainHeading>
      <BottomLine>{props.bottom}</BottomLine>
    </>
  );
};

export { Heading };

export default Header;
