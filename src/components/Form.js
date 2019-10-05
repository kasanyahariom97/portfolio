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

const encode = data => {
  return Object.keys(data)
    .map(e => encodeURIComponent(e) + '=' + encodeURIComponent(data[e]) )
    .join("&");
}

export default class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "name": "",
      "email": "",
      "subject": "",
      "message": "",
      "code": ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    fetch('/',
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    }
    )
    .then(() => this.setState({"code": "Success"}))
    .catch(e => this.setState({"code": "Success"}));
    this.setState({
      "name": "",
      "email": "",
      "subject": "",
      "message": "",
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  static contextType = ReactContext;
  render() {
    const myContext = this.context;
    return (
      <div>
      <span>{this.state.code}</span>
      <BigContainer method="POST" name="contact" onSubmit={this.handleSubmit} >
      <input type="hidden" name="form-name" value="contact" />
      <Info type="text" name="name" id="name" placeholder="Name" bg={myContext.mode.navColor} color={myContext.mode.lightColor} bBottom={myContext.mode.primaryColor} value={this.state.name} onChange={this.handleChange}/>
      <Info type="text" name="email" id="email" placeholder="Email" bg={myContext.mode.navColor} color={myContext.mode.lightColor} bBottom={myContext.mode.primaryColor} value={this.state.email} onChange={this.handleChange} />
      <Info type="text" name="subject" id="subject" placeholder="Subject" bg={myContext.mode.navColor} color={myContext.mode.lightColor} bBottom={myContext.mode.primaryColor} value={this.state.subject} onChange={this.handleChange} />
      <MessageBox name="message" id="message" placeholder="Message" bg={myContext.mode.navColor} color={myContext.mode.lightColor} bBottom={myContext.mode.primaryColor} value={this.state.message} onChange={this.handleChange} />
      <Button color={myContext.mode.primaryColor} hvColor={myContext.mode.backColor}>
        <button type="submit" name="submit">
          Submit
        </button>
      </Button>
    </BigContainer>
      </div>
    )
  }
}
