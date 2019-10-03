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
import SocialLinks from './components/SocialNav';
import Model from './Modals/Loading';
import ColorSwitcher from "./Modals/ColorSwitcher";
import { ReactContext } from "./Context";

const StyledFragment = styled.div`
  display: flex;
  color: ${props => props.color};
  background-color: ${props => props.bg};
`;

function App(props) {
  const myContext = React.useContext(ReactContext);
  const [currentActive, setCurrentActive] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, []);

  const setActive = num => {
    setCurrentActive(num);
  };

  if(isLoading){
    return <Model />
  }

  return (
    <StyledFragment bg={myContext.mode.backColor} color={myContext.mode.fontColor}>
      <Navbar active={currentActive} />
      <ColorSwitcher />
      <Container bg={myContext.mode.backColor}>
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
              <Route
              render={props => <NotFound {...props} setActive={setActive} />} 
              />
            </Switch>
      </Container>
      <SocialLinks />
    </StyledFragment>
  );
}

export default App;
