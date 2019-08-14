import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "./Orientation1.jpg";
import img2 from "./Orientation2.jpg";
import img3 from "./Orientation3.jpg";
import Image from "react-bootstrap/Image";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";

const imgs = [img1, img2, img3];

class Orientation extends Component {
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
                    <Col className="text-center">
                        <h2>Orientation</h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={true} className="my-1 border-right">
                        <ResponsiveEmbed aspectRatio="4by3">
                            <Image src={imgs[0]}/>
                        </ResponsiveEmbed>
                    </Col>
                    <Col lg={true} className="my-1 border-right">
                        <ResponsiveEmbed aspectRatio="4by3">
                            <Image src={imgs[1]}/>
                        </ResponsiveEmbed>
                    </Col>
                    <Col lg={true} className="my-1">
                        <ResponsiveEmbed aspectRatio="4by3">
                            <Image src={imgs[2]}/>
                        </ResponsiveEmbed>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Orientation;
