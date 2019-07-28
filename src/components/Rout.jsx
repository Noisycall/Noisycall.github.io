import React, {Component} from "react";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";

import ProjCard from "./ProjCard/ProjCard";
import Slots from "./Slots/Slots";

class Rout extends Component {
  render() {
    return (
        <HashRouter>
        <div>
            <Switch>
                <Route path="/" component={ProjCard} exact/>

                <Route path="/Slots" component={Slots}/>
                <Redirect to="/" push/>
            </Switch>
        </div>
        </HashRouter>
    );
  }
}
export default Rout;
