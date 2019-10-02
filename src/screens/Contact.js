import React from "react";
import Container from "../components/ComponentContainer";
import Form from "../components/Form";

function Contact(props) {
  props.setActive(3);
  return (
    <Container>
      <Form id="left" />
    </Container>
  );
}

export default Contact;
