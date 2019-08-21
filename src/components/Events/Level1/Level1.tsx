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
            <h3>
              Test your coding skills in the newly launched Competitive Coding
              Series
            </h3>
          </Col>
        </Row>
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
        <Row>
          <Col>
            {/*<ResponsiveEmbed>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScIiNLhGjpNZ1zRmWCmNyo8V-BOdWhVNqNfks4TBZQmgFLqMA/viewform?embedded=true"
                width="640"
                height="729"
              >
                Loading…
              </iframe>
            </ResponsiveEmbed>*/}
            <Button
              variant="success"
              block
              type="button"
              href="https://codersera.tech/Level1"
            >
              <h3>Fill The form here</h3>
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Level1;
