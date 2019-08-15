import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";

function importAll(r: any) {
  return r.keys().map(r);
}
// @ts-ignore
const imgs = importAll(require.context("./imgs", false, /\.(png|jpe?g|svg)$/));
console.log(imgs);
class Scratch extends Component {
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
      <Container fluid={true}>
        <Row>
          {imgs.slice(0, 3).map((image: any) => {
            return (
              <Col lg className="my-2">
                <ResponsiveEmbed aspectRatio="4by3" typeof="image/jpg">
                  <img src={image} alt={image} />
                </ResponsiveEmbed>
              </Col>
            );
          })}
        </Row>
        <Row>
          {imgs.slice(4, 7).map((image: any) => {
            return (
              <Col lg className="my-1">
                <ResponsiveEmbed aspectRatio="4by3" typeof="image/jpg">
                  <img src={image} alt={image} />
                </ResponsiveEmbed>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
export default Scratch;
