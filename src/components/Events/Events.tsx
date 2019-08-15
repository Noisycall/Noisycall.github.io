import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Orientation from "./Orientation/Orientation";
import "./buttonStyle.css";
import Scratch from "./Scratch/Scratch";

class Events extends Component {
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
        <Accordion className="mt-3">
          <Card bg="dark" text="white">
            <Card.Header className="text-center">
              <Accordion.Toggle
                as={Button}
                size={"lg"}
                style={{ width: "300px" }}
                eventKey="0"
              >
                Orientation
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Orientation />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card bg="dark" text="white">
            <Card.Header className="text-center">
              <Accordion.Toggle
                as={Button}
                variant="primary"
                size="lg"
                style={{ width: "300px" }}
                eventKey="1"
              >
                Scratch WorkShop
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Scratch />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default Events;
