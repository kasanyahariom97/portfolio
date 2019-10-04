import React from "react";
import Header, { Heading } from "../components/Header";
import Container from "../components/HomeContainer";
import Button from "../components/StyledButton";
import { Link } from "react-router-dom";
import RightSlide from "../components/RightSlide";
import styled from "styled-components";
import Typing from "react-typing-animation";
import Cursor from "react-typing-animation/dist/Cursor";
import { ReactContext } from "../Context";
import Navbar from "../components/Navbar";
import ContainerComponent from "../components/StyledContainer";

const Colored = styled.span`
  color: ${props => props.color};
`;

const MobileOnly = styled.div`
  display: none;
  @media (max-width: 820px) {
    display: block;
    height: auto;
    position: fixed;
    z-index: 0;
    overflow: none;
    bottom: 0.8rem;
    right: 1.5rem;
  }
`;

function Home(props) {
  const myContext = React.useContext(ReactContext);
  props.setActive(0);
  return (
    <>
      <Navbar active={props.currentActive} />
      <ContainerComponent bg={myContext.mode.backColor}>
        <Container key="container">
          <RightSlide key="right-side" />
          <Header id="left" key="header">
            <Heading bottom="MERN Stack and React Native" key="heading">
              <Colored color={myContext.mode.primaryColor}>Hi,</Colored>
              <br />
              I'm Harry, <br />
              <span id="autoType">
                <Typing
                  loop={true}
                  speed={200}
                  cursor={<Cursor className="myClass" />}
                >
                  Web Developer
                  <Typing.Reset count={-1} delay={500} />
                  <Typing.Delay ms={1000} />
                  Web Designer
                  <Typing.Reset count={-1} delay={500} />
                  <Typing.Delay ms={1000} />
                  App Developer
                  <Typing.Reset count={-1} delay={1000} />
                  <Typing.Delay ms={1000} />
                </Typing>
                .
              </span>
            </Heading>
            <Button
              key="button"
              color={myContext.mode.primaryColor}
              hvColor={myContext.mode.backColor}
            >
              <Link to="/contact">Contact Me</Link>
            </Button>
          </Header>
        </Container>
        <MobileOnly key="mobileonly">
          <RightSlide key="right-slide" />
        </MobileOnly>
      </ContainerComponent>
    </>
  );
}

export default Home;
