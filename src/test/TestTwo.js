import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops'

export default class TestTwo extends Component {
   render() {
      return (
         <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 1000, duration: 1000 }}>
      {props => (
        <div style={props}>
          <div style={c2Style}>
            <h1>Component 2</h1>
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
      )
   }
}

const c2Style = {
   background: "slateblue",
   color: "white",
   padding: "1.5rem"
 };