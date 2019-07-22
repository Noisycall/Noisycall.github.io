import React, {Component} from "react";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import Intro from "./Intro";
import im from "./im";

import ProjCard from "./ProjCard";

class Rout extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        <Switch>
            <Route path="/" component={ProjCard} exact/>
          <Route path={"/wow"} component={im}/>
            <Route path="/action" component={Intro}/>
          <Redirect to="/" push/>
        </Switch>
        </div>
      </HashRouter>
    );
  }
}
export default Rout;
