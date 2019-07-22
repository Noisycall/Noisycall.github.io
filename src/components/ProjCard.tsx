import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import CardDeck from "react-bootstrap/CardDeck";
import CarouselItem from "react-bootstrap/CarouselItem";
import Carousel from "react-bootstrap/Carousel";

class ProjCard extends Component {
  images = ["PWA1.png", "PWA2.png", "PWA3.png"];
  Appimages = ["App1.png", "App2.png", "App3.png", "App4.png"];

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
            <h1 style={{textAlign: "center"}}>
              Welcome to Coder's Era, a place for programmers to learn and succeed
            </h1>
          </Jumbotron>
          <Container fluid className="mb-3">
            {/*Container for Cards*/}
            <Row style={{fontSize: 20}}>
              <Col lg={{span: 4, offset: 2}} className="border-right">
                {/*Card 1*/}
                <Card className="mt-1 h-100" bg="dark" text="white">
                  <Card.Header style={{textAlign: "center"}}>
                    MIT Student Console
                  </Card.Header>
                  <Card.Body className="d-flex flex-column justify-content-between text-center">
                    The MIT Student console enables the students an easy to use
                    platform to get organized and stay on top of all their college
                    activities and studies
                    <hr/>
                    <Carousel>
                      {this.Appimages.map(image => (
                          <CarouselItem>
                            <img src={image} className="img-fluid" alt={image}/>
                          </CarouselItem>
                      ))}
                    </Carousel>
                    <hr/>
                    <div className="d-flex justify-content-between flex-wrap">
                      <Button variant="info">MIT Student Console</Button>
                      <Button variant="success">Download</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              {/*Card 2*/}
              <Col lg={4}>
                <Card className="mt-2 mt-lg-1 h-100" bg="dark" text="white">
                  <Card.Header style={{textAlign: "center"}}>
                    MIT Student Console
                  </Card.Header>

                  <Card.Body className="d-flex flex-column justify-content-between text-center">
                    The MIT Student console PWA similar functionality to the App,
                    but in a platform independent manner.
                    <hr/>
                    <Carousel>
                      {this.images.map(image => (
                          <CarouselItem>
                            <img src={image} className="img-fluid" alt={image}/>
                          </CarouselItem>
                      ))}
                    </Carousel>
                    <hr/>
                    <div className="d-flex justify-content-between flex-wrap">
                      <Button variant="info">MIT PWA</Button>
                      <Button variant="success">Link</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <Jumbotron>
            <h2 className="text-center">About Us</h2>
            <br/>
            <CardDeck>
              <Card>
                <Card.Header>Harsh</Card.Header>
                <Card.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                  et magna eu risus malesuada egestas. Quisque eu rutrum augue,
                  vitae molestie orci. Etiam vehicula enim et ligula egestas,
                  lacinia hendrerit tortor gravida. Phasellus rutrum aliquet arcu
                  et varius. Sed malesuada enim dolor, eget imperdiet velit
                  pretium non. Nullam id purus quis metus efficitur auctor nec sit
                  amet velit. Nulla ullamcorper in mauris id dignissim. Nam
                  dignissim, velit sed finibus pretium, libero mauris lobortis
                  dolor, ut scelerisque lectus sem at dolor. Ut eget congue
                  mauris. Praesent tristique porta arcu, id fringilla ante rhoncus
                  eu. Donec non viverra tortor. Aliquam rhoncus ultrices justo, in
                  tincidunt ipsum egestas vitae.
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>Harsh</Card.Header>
                <Card.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                  et magna eu risus malesuada egestas. Quisque eu rutrum augue,
                  vitae molestie orci. Etiam vehicula enim et ligula egestas,
                  lacinia hendrerit tortor gravida. Phasellus rutrum aliquet arcu
                  et varius. Sed malesuada enim dolor, eget imperdiet velit
                  pretium non. Nullam id purus quis metus efficitur auctor nec sit
                  amet velit. Nulla ullamcorper in mauris id dignissim. Nam
                  dignissim, velit sed finibus pretium, libero mauris lobortis
                  dolor, ut scelerisque lectus sem at dolor. Ut eget congue
                  mauris. Praesent tristique porta arcu, id fringilla ante rhoncus
                  eu. Donec non viverra tortor. Aliquam rhoncus ultrices justo, in
                  tincidunt ipsum egestas vitae.
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>Harsh</Card.Header>
                <Card.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                  et magna eu risus malesuada egestas. Quisque eu rutrum augue,
                  vitae molestie orci. Etiam vehicula enim et ligula egestas,
                  lacinia hendrerit tortor gravida. Phasellus rutrum aliquet arcu
                  et varius. Sed malesuada enim dolor, eget imperdiet velit
                  pretium non. Nullam id purus quis metus efficitur auctor nec sit
                  amet velit. Nulla ullamcorper in mauris id dignissim. Nam
                  dignissim, velit sed finibus pretium, libero mauris lobortis
                  dolor, ut scelerisque lectus sem at dolor. Ut eget congue
                  mauris. Praesent tristique porta arcu, id fringilla ante rhoncus
                  eu. Donec non viverra tortor. Aliquam rhoncus ultrices justo, in
                  tincidunt ipsum egestas vitae.
                </Card.Body>
              </Card>
            </CardDeck>
          </Jumbotron>
        </div>
    );
  }
}

export default ProjCard;
