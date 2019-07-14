import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header1 from "./Header1";
import Intro from "./Intro";
import im from "./im";
import {Redirect} from "react-router-dom";
import JumboCaro from "./JumboCaro";

class Rout extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        <Switch>
          <Route path="/" component={Intro} exact />
          <Route path={"/wow"} component={im}/>
          <Route path="/action" component={JumboCaro}/>
          <Redirect to="/" push/>
        </Switch>
        </div>
      </HashRouter>
    );
  }
}
export default Rout;
