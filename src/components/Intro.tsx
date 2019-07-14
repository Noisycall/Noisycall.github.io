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
  render() {
    return (
      <div>
        <Header1 />
        <Jumbotron>
          <h1 style={{ textAlign: "center" }}>
            Welcome to Coder's Era, a place for programmers to learn and succeed
          </h1>
        </Jumbotron>
        <Container>
          <Row className="justify-content-between">
            <Col md="auto">
              <Card
                bg="warning"
                className="my-1"
                style={{ maxWidth: "380px", height: "650px" }}
              >
                <Card.Header>
                  <Carousel
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
            <Col md="auto">
              <Card
                bg="warning"
                className="my-1"
                style={{ maxWidth: "380px", height: "650px" }}
              >
                <Card.Header>
                  <Carousel
                    nextIcon={this.state.nextIcon}
                    prevIcon={this.state.prevIcon}
                    style={{
                      maxHeight: "565px",
                      maxWidth: "300px",
                      textAlign: "center"
                    }}
                  >
                    <CarouselItem>
                      <Image src="App1.png" className="img-fluid" />
                    </CarouselItem>
                    <CarouselItem>
                      <Image src="App2.png" className="img-fluid" />
                    </CarouselItem>
                    <CarouselItem>
                      <Image src="App3.png" className="img-fluid" />
                    </CarouselItem>
                    <CarouselItem>
                      <Image src="App4.png" className="img-fluid" />
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
      </div>
    );
  }
}
export default Intro;
