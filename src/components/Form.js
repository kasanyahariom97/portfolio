import React from "react";
import styled from "styled-components";
import Button from "./StyledButton";
import { ReactContext } from "../Context";

const Info = styled.input`
  transition: all 0.2s;
  background: ${props => props.bg};
  border: none;
  outline: none;
  border-bottom: 3px solid ${props => props.bg};
  padding: 1rem;
  margin: 0.5rem auto;
  width: 85%;
  color: ${props => props.color};

  &:focus {
    border-bottom-color: ${props => props.bBottom};
  }

  &::placeholder {
    font-weight: bold;
  }
`;

const MessageBox = styled.textarea`
  transition: all 0.2s;
  background: ${props => props.bg};
  border: none;
  outline: none;
  border-bottom: 3px solid ${props => props.bg};
  padding: 1rem;
  margin: 0.5rem auto;
  width: 85%;
  color: ${props => props.color};

  &:focus {
    border-bottom-color: ${props => props.bBottom};
  }

  &::placeholder {
    font-weight: bold;
  }
`;

const BigContainer = styled.form`
  width: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Form = props => {
  const myContext = React.useContext(ReactContext);
  return (
    <div>
      <BigContainer action="/" method="POST" data-netlify="true">
        <Info type="text" name="name" id="name" placeholder="Name" bg={myContext.mode.navColor} color={myContext.mode.lightColor} bBottom={myContext.mode.primaryColor}/>
        <Info type="text" name="email" id="email" placeholder="Email" bg={myContext.mode.navColor} color={myContext.mode.lightColor} bBottom={myContext.mode.primaryColor}/>
        <Info type="text" name="subject" id="subject" placeholder="Subject" bg={myContext.mode.navColor} color={myContext.mode.lightColor} bBottom={myContext.mode.primaryColor}/>
        <MessageBox name="message" id="message" placeholder="Message" bg={myContext.mode.navColor} color={myContext.mode.lightColor} bBottom={myContext.mode.primaryColor}/>
        <Button color={myContext.mode.primaryColor} hvColor={myContext.mode.backColor}>
          <button type="submit" name="submit">
            Submit
          </button>
        </Button>
      </BigContainer>
    </div>
  );
};

export default Form;
