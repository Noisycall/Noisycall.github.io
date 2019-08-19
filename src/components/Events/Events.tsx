import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Orientation from "./Orientation/Orientation";
import Scratch from "./Scratch/Scratch";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";

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
          <Card bg="dark" text="white">
            <Card.Header className="text-center">
              <Accordion.Toggle
                as={Button}
                variant="primary"
                size="lg"
                style={{ width: "300px" }}
                eventKey="2"
              >
                Tutorial - Scratch
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body className="d-flex flex-column align-items-center">
                <h4 className="text-center">
                  Steps in notepad file click on the link
                  <a href="https://drive.google.com/file/d/1-C9qBbhrVDoP3U1tibXduxJQMrpeLo3H/view">
                    {" "}
                    Click here{" "}
                  </a>
                </h4>
                <ResponsiveEmbed
                  aspectRatio="16by9"
                  style={{ maxWidth: "700px" }}
                >
                  <iframe
                    title="Scratch Video"
                    src="https://www.youtube.com/embed/ijUDLmOlcS4"
                    //frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </ResponsiveEmbed>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default Events;
