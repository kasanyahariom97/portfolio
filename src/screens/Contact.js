import React from "react";
import Container from "../components/HomeContainer";
import Header, { Heading } from "../components/Header";
import styled from "styled-components";
import RightSlide from "../components/Picture";
import Form from "../components/Form";
import { FiMail } from "react-icons/fi";
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

function Contact(props) {
  const myContext = React.useContext(ReactContext);
  props.setActive(3);
  return (
    <>
    <Navbar active={props.currentActive} />
      <ContainerComponent bg={myContext.mode.backColor}>
      <Container>
        <RightSlide>
          <FiMail />
        </RightSlide>
        <Header id="left">
          <Heading>
            <Colored color={myContext.mode.primaryColor}>Contact</Colored>
          </Heading>
          <Form />
        </Header>
      </Container>
      <MobileOnly>
        <RightSlide>
          <FiMail />
        </RightSlide>
      </MobileOnly>
      </ContainerComponent>
    </>
  );
}

export default Contact;
