import React from "react";
import Container from "../components/StyledContainer";
import styled from "styled-components";
import { Spring } from "react-spring/renderprops";
import {ReactContext} from "../Context";
import Navbar from '../components/Navbar';

const NotFoundEl = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 4.5;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 6rem;
    margin: 0;
    padding: 0;
  }
  div.line {
    width: 3rem;
    height: 7px;
    background: ${props => props.line};
  }
`;

function NotFound(props) {
  const myContext = React.useContext(ReactContext);
  props.setActive(404);
  return (
    <>
    <Navbar active={props.currentActive} />
      <Container bg={myContext.mode.backColor}>
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 400, duration: 500 }}
    >
      {e => (
        <Container style={e} bg={myContext.mode.backColor}>
          <NotFoundEl line={myContext.mode.primaryColor}>
            <h1>404</h1>
            <div className="line"></div>
            <p>Page Not Found</p>
          </NotFoundEl>
        </Container>
      )}
    </Spring>
    </Container>
    </>
  );
}

export default NotFound;
