import React from "react";
import { ReactContext } from "../Context";
import styled from "styled-components";
import { Heading } from "../components/Header";

const ProjectContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  background: ${props => props.bg};
  color: ${props => props.color};
`;

const Colored = styled.span`
  display: inline-block;
  width: 100%;
  text-align: center;
  color: ${props => props.color};
`;

function Projects(props) {
  const myContext = React.useContext(ReactContext);
  props.setActive(2);
  return (
    <>
      <ProjectContainer
        bg={myContext.mode.backColor}
        color={myContext.mode.fontColor}
      >
        <Heading>
          <Colored color={myContext.mode.primaryColor}>Pardom</Colored>
          <br />
          The interruption
        </Heading>
        <p>Will be available soon...</p>
      </ProjectContainer>
    </>
  );
}

export default Projects;
