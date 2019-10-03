import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ReactProvider } from "./Context";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <ReactProvider>
    <Router>
      <App />
    </Router>
  </ReactProvider>,
  document.getElementById("root")
);
