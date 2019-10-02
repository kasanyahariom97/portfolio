import React from "react";
import Header, { Heading } from "../components/Header";
import Container from "../components/HomeContainer";
import Button from "../components/StyledButton";
import { Link } from "react-router-dom";
import RightSlide from "../components/RightSlide";
import styled from "styled-components";

const MobileOnly = styled.div`
  display: none;
  @media (max-width: 820px) {
    display: block;
    width: auto;
    position: absolute;
    z-index: 0;
    bottom: 1rem;
    right: 1.5rem;
  }
`

function Home(props) {
  props.setActive(0);
  return (
    <>
    <Container>
      <RightSlide />
      <Header id="left">
        <Heading bottom="Node Express React MongoDB MySQL Vue">
          Hi,
          <br />
          I'm Harry, <br />
          Web Developer._
        </Heading>
        <Button>
          <Link to="/contact">Contact Me</Link>
        </Button>
      </Header>
    </Container>
    <MobileOnly>
      <RightSlide />
    </MobileOnly>
    </>
  );
}

export default Home;
