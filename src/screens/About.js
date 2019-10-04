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
            Lorem ipsum dolor sit amet, usu id populo petentium iracundia. Vix
            et idque luptatum insolens, id qui nostro sententiae, delectus
            placerat his ne. Ei vim solum ullum, qui et dolorem intellegam.
            <br />
            <br />
            ancillae sea at. Mel no detracto eligendi erroribus, est ut solet
            maiestatis eloquentiam, eum id adhuc tibique minimum. Te erat
            intellegat eos. Duo id velit singulis necessitatibus, euismod eum.
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
