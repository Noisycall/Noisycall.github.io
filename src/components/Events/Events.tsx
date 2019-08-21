import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Orientation from "./Orientation/Orientation";
import Scratch from "./Scratch/Scratch";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import BM from "./BM_Patil_Sir.jpg";
import PP from "./P_Purnaye_sir.jpg";
import Figure from "react-bootstrap/Figure";
import FigureCaption from "react-bootstrap/FigureCaption";
import Image from "react-bootstrap/Image";

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
                eventKey="3"
              >
                Level 1
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body className="text-center">
                <h3>
                  Test your coding skills in the newly launched Competitive
                  Coding Series
                </h3>
                <Container>
                  <Row>
                    <Col>Headed by-</Col>
                  </Row>
                  <Row>
                    <Col className="m-auto">
                      <a href="https://mitwpu.edu.in/k-Teacher/balaji-patil/">
                        {" "}
                        <Figure>
                          <Image src={BM} />
                          <FigureCaption>BM Patil Sir</FigureCaption>
                        </Figure>
                      </a>
                    </Col>
                    <Col className="m-auto">
                      <a href="https://mitwpu.edu.in/k-Teacher/prasad-purnaye/">
                        <Figure>
                          <Image src={PP} />
                          <FigureCaption>Prasad Puryane Sir</FigureCaption>
                        </Figure>
                      </a>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
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
