import React, {Component} from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import MITApp from "./MITApp"
import ProjCard from "./ProjCard/ProjCard";
import Slots from "./Slots/Slots";

class Rout extends Component {
  render() {
    return (
        <BrowserRouter>
        <div>
            <Switch>
                <Route path="/home" component={ProjCard} exact/>
                <Route path="/home/MITApp" component={MITApp}/>
                <Route path="/home/search" component={Slots}/>
                <Redirect to="/home" push/>
            </Switch>
        </div>
        </BrowserRouter>
    );
  }
}
export default Rout;
