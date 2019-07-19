import React, {Component} from "react";
import Header1 from "./Header1";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
                <Header1/>
                <Container>
                    <Row className="d-flex">
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ProjCard;
