import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";

function importAll(r: any) {
  return r.keys().map(r);
}
// @ts-ignore
const imgs = importAll(require.context("./imgs", false, /\.(png|jpe?g)$/));
// @ts-ignore
const imgwebp = importAll(require.context("./imgs", false, /\.(webp)$/));
console.log(imgwebp);
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
          {imgs.slice(0, 3).map((image: any, index: number) => {
            return (
              <Col lg className="my-2" key={index}>
                <ResponsiveEmbed aspectRatio="4by3">
                  <img
                    srcSet={`${imgwebp[index]} 1x,${image} 1x`}
                    alt={image}
                  />
                </ResponsiveEmbed>
              </Col>
            );
          })}
        </Row>
        <Row>
          {imgs.slice(3, 6).map((image: any, index: number) => {
            return (
              <Col lg className="my-1" key={index}>
                <ResponsiveEmbed aspectRatio="4by3">
                  <img
                    srcSet={`${imgwebp[index + 3]} 1x,${image} 1x`}
                    alt={`${imgwebp[index + 3]}`}
                  />
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
