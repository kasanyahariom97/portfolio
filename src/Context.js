import React, { Component } from "react";
import { dark, bright } from './constants/Colours';

const ReactContext = React.createContext();

class ReactProvider extends Component {

   constructor(props) {
      super(props);
      this.switchMode = this.switchMode.bind(this);
   }

   current = 'true';
   state = {
      currentMode: dark
   }

   componentDidMount() {
      this.current = localStorage.getItem('current') || "false";
      if(this.current === 'true'){
         this.setState({
            currentMode: bright
         });
      }else {
         this.setState({
            currentMode: dark
         });
      }
   }

   switchMode() {
      if(this.current === 'true'){
         localStorage.setItem('current', 'false');
      }else {
         localStorage.setItem('current', 'true');
      }
      window.location.reload();
   }
  render() {
    return (
      <ReactContext.Provider value={{mode: this.state.currentMode, switch: this.switchMode, current: this.current}}>
        {this.props.children}
      </ReactContext.Provider>
    );
  }
}

const ReactConsumer = ReactContext.Consumer;

export { ReactContext, ReactProvider, ReactConsumer };
