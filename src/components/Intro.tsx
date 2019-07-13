import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import Row from "react-bootstrap/Row";

class Intro extends Component {
  stylec = {
    height: "565px",
    width: "366px"
  };
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
        <Jumbotron>
          <h1 style={{ textAlign: "center" }}>
            Welcome to Coder's Era, a place for programmers to learn and succeed
          </h1>
        </Jumbotron>
        <Container>
          <Row className="justify-content-center">

              <Carousel
                nextIcon={this.state.nextIcon}
                prevIcon={this.state.prevIcon}
                style={this.stylec}
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

          </Row>
        </Container>
      </div>
    );
  }
}
export default Intro;
