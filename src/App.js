import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Home from "./screens/Home";
import Portfolio from "./screens/Portfolio";
import NotFound from "./screens/404";
import Logo from "./components/Logo";
import SocialLinks from "./components/SocialNav";
import Model from "./Modals/Loading";
import ColorSwitcher from "./Modals/ColorSwitcher";
import { ReactContext } from "./Context";
import OrientWran from "./Modals/OrientWarn";
import StyledFragment from './components/StyledFragment';

function App(props) {
  const myContext = React.useContext(ReactContext);
  const [currentActive, setCurrentActive] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentOrientation, setCurrentOrientation] = React.useState(
    window.orientation
  );

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const setActive = num => {
    setCurrentActive(num);
  };

  window.addEventListener("orientationchange", e => {
    setCurrentOrientation(parseInt(e.target.orientation));
  });

  if (currentOrientation === 90 || currentOrientation === -90) {
    return <OrientWran />;
  }

  if (isLoading) {
    return <Model />;
  }

  return (
    <div style={{ color: myContext.mode.fontColor }}>
      <ColorSwitcher />
      <Logo />
      <StyledFragment
        bg={myContext.mode.backColor}
        color={myContext.mode.fontColor}
      >
        <Switch location={props.location}>
          <Route
            exact
            path="/"
            render={props => (
              <Home
                {...props}
                setActive={setActive}
                currentActive={currentActive}
              />
            )}
          />
          <Route
            exact
            path="/about"
            render={props => (
              <About
                {...props}
                setActive={setActive}
                currentActive={currentActive}
              />
            )}
          />
          <Route
            exact
            path="/contact"
            render={props => (
              <Contact
                {...props}
                setActive={setActive}
                currentActive={currentActive}
              />
            )}
          />
          <Route
            exact
            path="/Portfolio"
            render={props => (
              <Portfolio
                {...props}
                setActive={setActive}
                currentActive={currentActive}
              />
            )}
          />
          <Route
            render={props => <NotFound {...props} setActive={setActive} />}
          />
        </Switch>
      </StyledFragment>
      <SocialLinks />
    </div>
  );
}

export default App;
