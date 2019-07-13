import React, {Component} from "react";
import Counters from "./Counters";
import Header1 from "./Header1";

class im extends Component{
    render() {
        return(
            <div>
                <Header1/>
                <Counters/>
                <img src={"CricField.jpg"}/>
            </div>
        )
    }

}
export default im;