import React, {Component} from "react";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import MITApp from "./MITApp"
import ProjCard from "./ProjCard";

class Rout extends Component {
  render() {
    return (
      <HashRouter>
        <div>
            <Switch>
                <Route path="/" component={ProjCard} exact/>
                <Route path="/MITApp" component={MITApp}/>

                <Redirect to="/" push/>
            </Switch>
        </div>
      </HashRouter>
    );
  }
}
export default Rout;
