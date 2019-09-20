import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";

class Eklavya extends Component {
  render():
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | string
    | number
    | {}
    | React.ReactNodeArray
    | React.ReactPortal
    | boolean
    | null
    | undefined {
    return (
      <div>
        <Jumbotron className="text-center">
          <h3 className="display-3">Eklavya Level 2</h3>
          <hr />
          <h4 className="display-5 font-weight-bold">
            Competition Closed, we are now evaluating results, thank you for
            particiapting!
          </h4>
        </Jumbotron>
      </div>
    );
  }
}
export default Eklavya;
