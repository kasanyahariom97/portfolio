import React from "react";
import { ReactContext } from "../Context";
import styled from "styled-components";
import { Heading } from "../components/Header";
import Project from '../components/Project';
import data from '../constants/projects';

const ProjectContainer = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  left: 0;
  align-items: center;
  background: ${props => props.bg};
  color: ${props => props.color};
  overflow: hidden;

  @media (max-width: 720px) {
    height: auto;
    width: auto;
    align-items: center;
    margin-top: 6rem;
  }

  .container {
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 720px) {
      display: block;
      margin-top: 3rem;
    }
  }

  .bottom {
    width: 100%;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.bottom};
  }
`;

const Colored = styled.span`
  display: inline-block;
  width: 100%;
  text-align: center;
  color: ${props => props.color};
`;

const Seprator = styled.div`
  width: 4rem;
  height: 5px;
  display: block;
  margin: 0;
  background: ${props => props.color};
`

function Projects(props) {
  const myContext = React.useContext(ReactContext);
  props.setActive(2);

  if(data.length === 0) {
    return (
      <ProjectContainer
        bg={myContext.mode.backColor}
        color={myContext.mode.fontColor}
        bottom={myContext.mode.navColor}
        style={{ height: '100vh' }}
      >
        <Heading>
          <Colored color={myContext.mode.primaryColor}>Pardom</Colored>
          <br />
          The Interruption
        </Heading>
      </ProjectContainer>
    )
  }

  return (
    <>
      <ProjectContainer
        bg={myContext.mode.backColor}
        color={myContext.mode.fontColor}
        bottom={myContext.mode.navColor}
      >
        <Heading>
          <Colored color={myContext.mode.primaryColor}>Portfolio</Colored>
        </Heading>
        <Seprator color={myContext.mode.primaryColor} />
        <div className="container">
        {
          data.map((e, i) => (
            <Project key={i} img={e.img} url={e.url} title={e.title} />
          ))
        }
        </div>
        <div className="bottom">
          &copy; Harry
        </div>
      </ProjectContainer>
    </>
  );
}

export default Projects;
