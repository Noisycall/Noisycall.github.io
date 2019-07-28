import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Rout from "./components/Rout";
import Header1 from "./components/Header1/Header1";
import Footer from "./components/Footer";

ReactDOM.render(<Header1 />, document.getElementById("header1"));
ReactDOM.render(<Rout />, document.getElementById("root"));
ReactDOM.render(<Footer />, document.getElementById("footer1"));
//ReactDOM.render(<Header1/>, document.getElementById("root"));
//ReactDOM.render(<Intro/>,document.getElementById("root2"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
