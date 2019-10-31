import React from "react";
import Container from "../components/HomeContainer";
import Header, { Heading } from "../components/Header";
import styled from "styled-components";
import RightSlide from "../components/Picture";
import { FiUser } from "react-icons/fi";
import { ReactContext } from "../Context";
import Navbar from "../components/Navbar";
import ContainerComponent from "../components/StyledContainer";
import { Link } from 'react-router-dom';

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
            Hello I'm Harry I'm a web &amp; mobile developer from India, I do most of my projects using Javascript especially in
            MERN ( MongoDB, ExpressJS, React and NodeJS ) stack, also I use React Native For mobile app development. Other than that I also do project using PHP + MySQL, Wordpress, VueJS and AdonisJS.
            <br />
            <br />
            Want a conversation please do not hesitate to <Link to="/contact" className="normalLink">contact me</Link>.
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
