import React, { Component } from "react";
import { dark, bright } from './constants/Colours';

const ReactContext = React.createContext();

class ReactProvider extends Component {

   constructor(props) {
      super(props);
      this.switchMode = this.switchMode.bind(this);
   }

   current = true;
   state = {
      currentMode: dark
   }

   switchMode() {
      if(this.current){
         this.setState({
            currentMode: bright
         });
      }else {
         this.setState({
            currentMode: dark
         });
      }
      this.current = !this.current;
   }
  render() {
    return (
      <ReactContext.Provider value={{mode: this.state.currentMode, switch: this.switchMode}}>
        {this.props.children}
      </ReactContext.Provider>
    );
  }
}

const ReactConsumer = ReactContext.Consumer;

export { ReactContext, ReactProvider, ReactConsumer };
