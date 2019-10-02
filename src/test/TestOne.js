import React from "react";
import { Spring } from "react-spring/renderprops";

const TestOne = props => {
  return (
    <Spring from={{ opacity: 0, marginTop: -500 }} to={{ opacity: 1, marginTop: 0 }}>
      {props => (
        <div style={props}>
          <div style={c1Style}>
            <h1>Component 1</h1>
            <p>
              Lorem ipsum dolor sit amet, ne eam alia graece accusam, id modus
              salutatus adversarium sea. Utroque detraxit in est, sea partem
              populo ei, oblique corrumpit reprehendunt ad eam. Erant mentitum
              principes ea duo, agam percipitur vituperatoribus sit an. Pri
              antiopam argumentum no. Vim ubique essent intellegebat no, idque
              consequat usu ne.
            </p>
          </div>
        </div>
      )}
    </Spring>
  );
};

const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem"
};

export default TestOne;
