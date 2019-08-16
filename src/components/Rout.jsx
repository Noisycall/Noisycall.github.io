import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import ProjCard from "./ProjCard/ProjCard";
import Slots from "./Slots/Slots";
import Events from "./Events/Events";

class Rout extends Component {
  render() {
    return (
      <BrowserRouter basename="/home">
        <Switch>
          <Route path="/" component={ProjCard} exact />
          <Route path="/Slots" component={Slots} />
          <Route path="/Events" component={Events} />
          <Redirect to="/" push />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Rout;
