
import React from "react";
import ReactDOM from "react-dom";
window.React = React;
//import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import App from './common/App.js';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


