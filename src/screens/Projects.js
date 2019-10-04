import React from "react";
import { ReactContext } from "../Context";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Heading } from "../components/Header";
import Project from "../components/Project";
import MyProjects from "../constants/projects";

const ProjectContainer = styled.div`
  width: 100%;
  background: ${props => props.bg};
  color: ${props => props.color};
`;

const ProjectCotains = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 4.5rem;
  padding: 1rem;
`;

const Colored = styled.span`
  color: ${props => props.color};
`;

const AllProjects = styled.div`
  display: grid;
  grid-gap: 0.3rem;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 820px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

function Projects(props) {
  const myContext = React.useContext(ReactContext);
  props.setActive(2);
  return (
    <>
      <Navbar
        style={{ position: "fixed", top: 0, left: 0 }}
        active={props.currentActive}
      />
      <ProjectContainer
        bg={myContext.mode.backColor}
        color={myContext.mode.fontColor}
      >
        <ProjectCotains>
          <Heading>
            <Colored color={myContext.mode.primaryColor}>Projects</Colored>
          </Heading>
          <AllProjects>
            {MyProjects.map(e => (
              <Project title={e.title} url={e.url} img={e.img} />
            ))}
          </AllProjects>
        </ProjectCotains>
      </ProjectContainer>
    </>
  );
}

export default Projects;
