import React,{Component} from "react";
import {HashRouter,Route} from "react-router-dom";
import Header1 from "./Header1";
import Intro from "./Intro";
import Counters from "./Counters";
import im from "./im"

class Rout extends Component{
    render(){
        return(
            <HashRouter>
                <div>
                <Route path="/" component={Header1} exact/>
                <Route path="/" component={Intro} exact/>
                <Route path="/wow" component={Header1} exact/>
                <Route path={"/wow"} component={Counters} exact/>
                <Route path={"/wow"} component={im} exact/>
                </div>
            </HashRouter>
        )

    }
}
export default Rout;