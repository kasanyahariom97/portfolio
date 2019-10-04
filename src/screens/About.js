import React from "react";
import Container from "../components/HomeContainer";
import Header, { Heading } from "../components/Header";
import styled from "styled-components";
import RightSlide from "../components/Picture";
import { FiUser } from "react-icons/fi";
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
    bottom: 2rem;
    right: 1rem;
  }
`;

function About(props) {
  const myContext = React.useContext(ReactContext);
  props.setActive(1);
  return (
    <>
    <Navbar active={props.currentActive} />
      <ContainerComponent bg={myContext.mode.backColor}>
      <Container>
        <RightSlide>
          <FiUser />
        </RightSlide>
        <Header id="left">
          <Heading>
            <Colored color={myContext.mode.primaryColor}>About</Colored>
          </Heading>
          <p>
            Hello I'm Harry I'm a mern stack and react native developer as well as
            designer
            <br />
            <br />
            with 2+ years of experience. &lt;Pardom the interruption: more info will be added soon &gt;
          </p>
        </Header>
      </Container>
      <MobileOnly>
        <RightSlide>
          <FiUser />
        </RightSlide>
      </MobileOnly>
      </ContainerComponent>
    </>
  );
}

export default About;
