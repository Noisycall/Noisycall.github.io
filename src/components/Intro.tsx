import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Header1 from "./Header1";
import Col from "react-bootstrap/Col";

class Intro extends Component {
  state = {
    nextIcon: (
      <span>
        <img src="right.png" />
      </span>
    ),
    prevIcon: (
      <span>
        <img src="left.png" />
      </span>
    )
  };
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
        <Header1 />
        <Jumbotron>
          <h1 style={{ textAlign: "center" }}>
            Welcome to Coder's Era, a place for programmers to learn and succeed
          </h1>
        </Jumbotron>
        <Container fluid>
          <Row className="m-1" id="MITPWA">
            <Col lg className="">
              <Container fluid>
                <Row>
                  <Col lg className="align-self-center alert alert-secondary">
                    <h4 style={{ textAlign: "center" }}>
                      The MIT student console is an App that helps all students
                      stay on top of their work!
                    </h4>
                    <h5>
                      <ul>
                        <li>Calender for the Year</li>
                        <li>Previous Year Question Papers</li>
                        <li>Study Material</li>
                        <li>Profiles</li>
                        <li>Lost And Found</li>
                      </ul>
                    </h5>
                  </Col>
                  <Col>
                    <Card
                      bg="warning"
                      className="my-1"
                      style={{ maxWidth: "380px" }}
                    >
                      <Card.Header>
                        <Carousel
                          className="d-flex flex-grow-1"
                          nextIcon={this.state.nextIcon}
                          prevIcon={this.state.prevIcon}
                          style={{
                            maxHeight: "565px",
                            maxWidth: "366px",
                            textAlign: "center"
                          }}
                        >
                          <CarouselItem>
                            <Image src="PWA1.png" className="img-fluid" />
                          </CarouselItem>
                          <CarouselItem>
                            <Image src="PWA2.png" className="img-fluid" />
                          </CarouselItem>
                          <CarouselItem>
                            <Image src="PWA3.png" className="img-fluid" />
                          </CarouselItem>
                        </Carousel>
                      </Card.Header>
                      <Card.Body>
                        <h3>MIT Student Console PWA</h3>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Col>

            <Col lg className="" id="MITApp">
              <Container className="d-flex align-items-baseline" fluid>
                <Row>
                  <Col lg className="align-self-center alert alert-secondary">
                    <h4 style={{ textAlign: "center" }}>
                      The MIT student console is an App that helps all students
                      stay on top of their work!
                    </h4>
                    <h5>
                      <ul>
                        <li>Calender for the Year</li>
                        <li>Previous Year Question Papers</li>
                        <li>Study Material</li>
                        <li>Profiles</li>
                        <li>Lost And Found</li>
                      </ul>
                    </h5>
                  </Col>
                  <Col>
                    <Card
                      bg="warning"
                      className="my-1"
                      style={{ maxWidth: "380px" }}
                    >
                      <Card.Header>
                        <Carousel
                          className="d-flex flex-grow-1"
                          nextIcon={this.state.nextIcon}
                          prevIcon={this.state.prevIcon}
                          style={{
                            maxHeight: "565px",
                            maxWidth: "340px",
                            textAlign: "center"
                          }}
                        >
                          <CarouselItem>
                            <Image src="App1.png" fluid />
                          </CarouselItem>
                          <CarouselItem>
                            <Image src="App2.png" fluid />
                          </CarouselItem>
                          <CarouselItem>
                            <Image src="App3.png" fluid />
                          </CarouselItem>
                          <CarouselItem>
                            <Image src="App4.png" fluid />
                          </CarouselItem>
                        </Carousel>
                      </Card.Header>
                      <Card.Body>
                        <h3>MIT Student Console App</h3>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Intro;
