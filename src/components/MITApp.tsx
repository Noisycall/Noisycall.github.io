import React, {Component} from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

class MITApp extends Component {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                <Jumbotron style={{fontSize: "2em", textAlign: "center"}}>
                    The MIT Student App provides many features to help you stay organized
                </Jumbotron>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col className="align-self-center">
                                <h2 className="text-center">Profile - Edit and Set your user info</h2>
                            </Col>
                            <Col className="text-center">
                                <Image src="profile.png" alt="profile.png" width="45%"/>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default MITApp;
