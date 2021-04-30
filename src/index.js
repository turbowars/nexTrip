
import React from "react";
import ReactDOM from "react-dom";
window.React = React;
import "./index.scss";
import App from './common/App';
// import getUsers from "./common/routesApi"

// console.log("Hello webpack!");
// getUsers().then(json => console.log(json));


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


