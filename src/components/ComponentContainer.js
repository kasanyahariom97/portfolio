import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 810px){
    height: auto;
    min-height: 100vh;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 6rem;
    margin-left: 4.5rem;

    #left {
      margin-bottom: 3rem;
      margin-top: 3rem;
    }
    #right {
      margin-bottom: 3rem;
      margin-top: 3rem;
    }
  }

  #right {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ComponentContainer = props => {
  return <Container>{props.children}</Container>;
};

export default ComponentContainer;
