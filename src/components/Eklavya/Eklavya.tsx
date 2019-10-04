import React, { Component } from "react";
import { Card, CardDeck, Jumbotron } from "react-bootstrap";

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
          <h4 className="font-weight-bold">Winners!</h4>
        </Jumbotron>
        <CardDeck style={{ fontSize: "2em" }}>
          <Card className="my-1">
            <Card.Header>Round 1</Card.Header>
            <Card.Body>
              <ul>
                <li>Jaynam Modi</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="my-1">
            <Card.Header>Round 2</Card.Header>
            <Card.Body>
              <ul>
                <li>Aditya Kasibhatla</li>
                <li>Ashwin Satpute</li>
                <li>Pruthav Sanwatsarkar</li>
              </ul>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    );
  }
}
export default Eklavya;
