import React from "react";
import Container from "../components/ComponentContainer";
import Picture from "../components/Picture";
import Header, {Heading} from "../components/Header";

function About(props) {
  props.setActive(1);
  return (
    <Container>
      <Header id="left">
        <Heading>About</Heading>
        <p>
          Lorem ipsum dolor sit amet, usu id populo petentium iracundia. Vix et
          idque luptatum insolens, id qui nostro sententiae, delectus placerat
          his ne. Ei vim solum ullum, qui et dolorem intellegam. Ornatus
          ancillae sea at. Mel no detracto eligendi erroribus, est ut solet
          maiestatis eloquentiam, eum id adhuc tibique minimum. Te erat
          intellegat eos. Duo id velit singulis necessitatibus, euismod legimus
          invidunt no pro. Qui amet alterum similique eu, ad ius euismod debitis
          officiis. Ceteros nominati dissentiunt pro cu. Eripuit consulatu pro
          ex, populo luptatum mediocritatem his no, in semper admodum maluisset
          eum.
        </p>
      </Header>
      <Picture />
    </Container>
  );
}

export default About;
