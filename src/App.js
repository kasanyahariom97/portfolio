import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import NotFound from "./screens/404";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Logo from "./components/Logo";
import Container from "./components/StyledContainer";
import Color from "./constants/Colors";
import SocialLinks from './components/SocialNav';

const StyledFragment = styled.div`
  display: flex;
  color: ${Color.fontColor};
  background-color: ${Color.backColor};
`;

function App(props) {
  const [currentActive, setCurrentActive] = React.useState(0);

  const setActive = num => {
    setCurrentActive(num);
  };

  return (
    <StyledFragment>
      <Navbar active={currentActive} />
      <Container>
        <Logo />
            <Switch location={props.location}>
              <Route
                exact
                path="/"
                render={props => <Home {...props} setActive={setActive} />}
              />
              <Route
                exact
                path="/about"
                render={props => <About {...props} setActive={setActive} />}
              />
              <Route
                exact
                path="/contact"
                render={props => <Contact {...props} setActive={setActive} />}
              />
              <Route
                exact
                path="/projects"
                render={props => <Projects {...props} setActive={setActive} />}
              />
              <Route component={NotFound} />
            </Switch>
      </Container>
      <SocialLinks />
    </StyledFragment>
  );
}

export default App;
