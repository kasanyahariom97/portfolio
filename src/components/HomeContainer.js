import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  height: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  @media (max-width: 810px){
    display: block;
    height: auto;
    min-height: 100vh;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 8rem;
    margin-left: 4.5rem;
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
