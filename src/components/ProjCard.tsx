import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

class ProjCard extends Component {
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
          <Container fluid className="h-100">
            {/*Container for Cards*/}
            <Row className="d-flex" style={{fontSize: 20}}>
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
                    <div>
                      <Button variant="info" className="float-left">
                        MIT Student Console
                      </Button>
                      <Button variant="success" className="float-right">
                        Download
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              {/*Card 2*/}
              <Col lg={4}>
                <Card className="mt-2 mt-lg-2 h-100" bg="dark" text="white">
                  <Card.Header style={{textAlign: "center"}}>
                    MIT Student Console
                  </Card.Header>

                  <Card.Body className="d-flex flex-column justify-content-between text-center">
                    The MIT Student console PWA similar functionality to the App,
                    but in a platform independent manner

                    <div>
                      <Button variant="info" className="float-left">
                        MIT PWA
                      </Button>
                      <Button variant="success" className="float-right ">
                        Link
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>

        </div>
    );
  }
}

export default ProjCard;
