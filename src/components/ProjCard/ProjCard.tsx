import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import CardDeck from "react-bootstrap/CardDeck";
import CarouselItem from "react-bootstrap/CarouselItem";
import Carousel from "react-bootstrap/Carousel";
import App1 from "./App1.png";
import App2 from "./App2.png";
import App3 from "./App3.png";
import App4 from "./App4.png";
import PWA1 from "./PWA1.png";
import PWA2 from "./PWA2.png";
import PWA3 from "./PWA3.png";

class ProjCard extends Component {
  state = { lowervisible: "" };
  options = {
    root: null,
    threshold: 0
  };

  handleEnter = (inView: boolean, event: IntersectionObserverEntry) => {
    this.setState(() => {
      let exampleobj = {
        lowervisible: inView ? "fado" : "invisible"
      };
      console.log(event.isIntersecting);
      return exampleobj;
    });
  };

  images = [PWA1, PWA2, PWA3];
  Appimages = [App1, App2, App3, App4];
  dowloadlink =
    " https://play.google.com/store/apps/details?id=in.edu.projecthermes.www.mitwpustudentconsole";

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
        <Jumbotron id="headerJ" style={{ textAlign: "center" }}>
          <h1>
            Welcome to Coder's Era, a place for programmers to learn and succeed
          </h1>
          <hr />
          <h3>Competition Now closed!</h3>
        </Jumbotron>
        <Container fluid className="mb-5 mb-lg-3">
          {/*Container for Cards*/}
          <Row style={{ fontSize: 20 }}>
            <Col lg={{ span: 4, offset: 2 }} className="border-right">
              {/*Card 1*/}
              <Card className="h-100" bg="dark" text="white">
                <Card.Header style={{ textAlign: "center" }}>
                  MIT Student Console
                </Card.Header>
                <Card.Body className="d-flex flex-column justify-content-between text-center">
                  The MIT Student console enables the students an easy to use
                  platform to get organized and stay on top of all their college
                  activities and studies
                  <hr />
                  <Carousel>
                    {this.Appimages.map((image, index) => (
                      <CarouselItem key={index}>
                        <img src={image} className="img-fluid" alt={image} />
                      </CarouselItem>
                    ))}
                  </Carousel>
                  <hr />
                  <div className="d-flex justify-content-center flex-wrap">
                    {/*<Button variant="info">MIT Student Console</Button>*/}
                    <Button variant="success" href={this.dowloadlink} size="lg">
                      Download
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            {/*Card 2*/}
            <Col lg={4}>
              <Card
                className="mt-4 mb-lg-0 mt-lg-0 h-100"
                bg="dark"
                text="white"
              >
                <Card.Header style={{ textAlign: "center" }}>
                  MIT Student Console
                </Card.Header>

                <Card.Body className="d-flex flex-column justify-content-between text-center">
                  The MIT Student console PWA similar functionality to the App,
                  but in a platform independent manner.
                  <hr />
                  <Carousel>
                    {this.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <img src={image} className="img-fluid" alt={image} />
                      </CarouselItem>
                    ))}
                  </Carousel>
                  <hr />
                  <div className="d-flex justify-content-center flex-wrap">
                    {/*<Button variant="info">MIT PWA</Button>*/}
                    <Button
                      variant="success"
                      size={"lg"}
                      href={"http://mitconsolelite.codersera.tech/"}
                    >
                      Link
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Jumbotron id="lower" className={this.state.lowervisible}>
          <h2 className="text-center">About Us</h2>
          <br />
          <CardDeck style={{ fontFamily: "Verdana", fontSize: "14" }}>
            <Card>
              <Card.Header>
                <b>Harsh (Founder)</b>
              </Card.Header>

              <Card.Body className="d-flex flex-column justify-content-between text-center">
                The founder of the club and a very talented programmer, he has
                experience making Android Apps for the last 3 years. He has a
                talent for picking the best people to work with and will go
                sleepless in his quest to deliver as many features as possible
                to the users of his apps. You might be familiar with his work in
                the form of the MIT Student Console App Console.
                <span className="d-flex justify-content-around">
                  <Button
                    className="mt-md-1 mt-2 mr-2"
                    href={"mailto:harsh@codersera.tech"}
                    block={true}
                    variant={"primary"}
                  >
                    Email
                  </Button>
                  <Button
                    className="mt-md-0 mt-2"
                    href="https://codersera.tech/harsh"
                    block={true}
                    variant={"primary"}
                  >
                    About
                  </Button>
                </span>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <b>Manas</b>
              </Card.Header>
              <Card.Body className="d-flex flex-column justify-content-between text-center">
                A Programmer to his core, Manas has worked at more PHP code than
                I would even care to look at, but his importance in building
                reliable backends cannot be understated. He is also the primary
                developer of the MIT PWA as well as a Co-Developer on the MIT
                Student Console App.
                <span className="justify-content-around d-flex">
                  {" "}
                  <Button
                    className="mt-md-0 mt-2 mr-2"
                    href={"mailto:manas@codersera.tech"}
                    block={true}
                    variant={"primary"}
                  >
                    Email
                  </Button>
                  <Button
                    className="mt-md-0 mt-2"
                    href="https://codersera.tech/manas"
                    block={true}
                    variant={"primary"}
                  >
                    About
                  </Button>
                </span>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <b>Kunal</b>
              </Card.Header>
              <Card.Body className="d-flex flex-column justify-content-between text-center">
                Hello, I'm the one who created this website, so if you didn't
                like it I'm sorry to disappoint you ☹️. However, if you liked
                it, please let me know at the linked email 😃.
                <span className="d-flex justify-content-around">
                  <Button
                    className="mt-md-0 mt-2 mr-2"
                    href={"mailto:kunal@codersera.tech"}
                    variant={"primary"}
                    block={true}
                  >
                    Email
                  </Button>
                  <Button
                    className="mt-md-0 mt-2"
                    href="https://codersera.tech/kunal"
                    variant={"primary"}
                    block={true}
                  >
                    About
                  </Button>
                </span>
              </Card.Body>
            </Card>
          </CardDeck>
        </Jumbotron>
      </div>
    );
  }
}

export default ProjCard;
