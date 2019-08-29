import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import ProjCard from "./ProjCard/ProjCard";
import Slots from "./Slots/Slots";
import Events from "./Events/Events";
import Eklavya from "./Eklavya/Eklavya";

class Rout extends Component {
  render() {
    return (
      <BrowserRouter basename="/home">
        <Switch>
          <Route path="/" component={ProjCard} exact />
          <Route path="/Slots" component={Slots} />
          <Route path="/Events" component={Events} />
          <Route path="/Eklavya" component={Eklavya} />
          <Redirect to="/" push />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Rout;
