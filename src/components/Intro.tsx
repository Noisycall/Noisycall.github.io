import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Header1 from "./Header1";
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
        <Header1/>
        <Jumbotron>
          <h1 style={{ textAlign: "center" }}>
            Welcome to Coder's Era, a place for programmers to learn and succeed
          </h1>
        </Jumbotron>
        <Container>
          <Row className="justify-content-center">
            <CardDeck>
              <Card bg="warning">
                <Card.Header>
                  <Carousel
                    nextIcon={this.state.nextIcon}
                    prevIcon={this.state.prevIcon}
                    style={{height: "565px",width: "366px", textAlign:"center"
                    }}

                  >
                    <CarouselItem>
                      <Image src="PWA1.png" />
                    </CarouselItem>
                    <CarouselItem>
                      <img src="PWA2.png" />
                    </CarouselItem>
                    <CarouselItem>
                      <img src="PWA3.png" />
                    </CarouselItem>
                  </Carousel>
                </Card.Header>
                <Card.Body><h3>MIT Student Console PWA</h3></Card.Body>
              </Card>
              <Card bg="warning">
                <Card.Header>
                  <Carousel
                    nextIcon={this.state.nextIcon}
                    prevIcon={this.state.prevIcon}
                    style={{height: "565px",width: "366px",textAlign:"center"
                    }}
                  >
                    <CarouselItem>
                      <Image src="App1.png" />
                    </CarouselItem>
                    <CarouselItem>
                      <img src="App2.png" />
                    </CarouselItem>
                    <CarouselItem>
                      <img src="App3.png" />
                    </CarouselItem>
                    <CarouselItem>
                      <img src="App4.png" />
                    </CarouselItem>
                  </Carousel>
                </Card.Header>
                <Card.Body><h3>MIT Student Console App</h3></Card.Body>
              </Card>
            </CardDeck>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Intro;
