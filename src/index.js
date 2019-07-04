import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/Counters";
import Fcc from "./components/Fcc";

ReactDOM.render(<Counters />, document.getElementById("root"));
ReactDOM.render(<Fcc />, document.getElementById("root3"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
