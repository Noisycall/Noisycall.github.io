import React, {Component} from "react";
import Header1 from "./Header1";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
                    {/*Container for Cards*/}
                    <Row className="d-flex justify-content-center">
                        <Col lg>
                            {/*Card 1*/}
                            <Card className="mt-1">
                                <Card.Header style={{textAlign: "center"}}>
                                    MIT Student Console
                                </Card.Header>
                                <Card.Body className="text-center">
                                    The MIT Student console enables the students an easy to use
                                    platform to get organized and stay on top of all their college
                                    activities and studies
                                    <br/>
                                    <Button variant="info" className="float-left">
                                        MIT Student Console
                                    </Button>
                                    <Button variant="success" className="float-right">
                                        Download
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/*Card 2*/}
                        <Col lg>
                            <Card className="mt-1">
                                <Card.Header style={{textAlign: "center"}}>
                                    MIT Student Console
                                </Card.Header>
                                <Card.Body className="text-center">
                                    The MIT Student console PWA similar functionality to the App,
                                    but in a platform independent manner
                                    <br/>
                                    <Button variant="info" className="float-left">
                                        MIT PWA
                                    </Button>
                                    <Button variant="success" className="float-right">
                                        Link
                                    </Button>
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
