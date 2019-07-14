import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarouselItem from "react-bootstrap/CarouselItem";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";

class JumboCaro extends Component {
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
        <Jumbotron>
          <Container fluid>
            <Row>
              <Col lg>
                <h4 style={{ textAlign: "center" }}>
                  The MIT student console is an App that helps all students stay
                  on top of their work!
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
              <Col lg className="d-flex justify-content-center">
                <Carousel
                  className="m-2"
                  style={{ width: "273px" }}
                  nextIcon={this.state.nextIcon}
                  prevIcon={this.state.prevIcon}
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
              </Col>
              <Col
                lg
                className="d-flex justify-content-center align-content-between"
              >
                <Carousel
                    className="m-1"
                  nextIcon={this.state.nextIcon}
                  prevIcon={this.state.prevIcon}
                  style={{ width: "366px" }}
                >
                  <CarouselItem>
                    <Image src="PWA1.png" fluid />
                  </CarouselItem>
                  <CarouselItem>
                    <Image src="PWA2.png" fluid />
                  </CarouselItem>
                  <CarouselItem>
                    <Image src="PWA3.png" fluid />
                  </CarouselItem>
                </Carousel>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default JumboCaro;
