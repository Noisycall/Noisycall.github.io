import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import Image from "react-bootstrap/Image";
import BM from "./BM_Patil_Sir.jpg";
import FigureCaption from "react-bootstrap/FigureCaption";
import PP from "./P_Purnaye_sir.jpg";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
// @ts-ignore
import ek from "./Eklavya.pdf";

class Level1 extends Component {
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
      <Container>
        <Row>
          <Col>
            <Alert variant="dark" className="font-weight-bold">
              <Alert.Heading>
                Test your coding skills in the newly launched Competitive Coding
                Series
              </Alert.Heading>
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button href={ek} className="my-2" block size="lg">
              Read the details here
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button
              variant="success"
              block
              className="my-2"
              type="button"
              href="https://codersera.tech/eklavya"
              size="lg"
            >
              Fill The form here
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>Headed By-</Col>
        </Row>
        <Row>
          <Col md>
            <a href="https://mitwpu.edu.in/k-Teacher/balaji-patil/">
              <Figure>
                <Image src={BM} width="50%" />
                <FigureCaption>BM Patil Sir</FigureCaption>
              </Figure>
            </a>
          </Col>
          <Col md>
            <a href="https://mitwpu.edu.in/k-Teacher/prasad-purnaye/">
              <Figure>
                <Image width="50%" src={PP} />
                <FigureCaption>Prasad Purnaye Sir</FigureCaption>
              </Figure>
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Level1;
