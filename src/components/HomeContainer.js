import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  height: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  overflow: hidden;

  @media (max-width: 810px){
    height: 100vh;
  }

  #left {
    flex: 1;
    justify-self: center;
    
  }

  #right {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 820px) {
      width: auto;
      position: absolute;
      top: 10rem;
      right: 2rem;
      display: none;
    }
  }
`;

const HomeContainer = props => {
  return <Container>{props.children}</Container>;
};

export default HomeContainer;
