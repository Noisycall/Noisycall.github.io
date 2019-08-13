import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import slot1 from "./selected.json";
import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";

class Slots extends Component {
  state = {
    searchval: "",
    testmap: undefined,
    show: false
  };
  handleClick = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  testmap = slot1.map((person, index) => (
    <tr>
      <td>{index + 1}</td>
      <td>{person.Name}</td>
    </tr>
  ));

  handleInput = () => {
    // @ts-ignore
    const searchval = document.getElementById("hello").value;
    this.setState({ searchval });
    console.log(this.state.searchval);
    let subset = slot1.filter((person: any) => {
      let na = person.Name;
      return na.toLowerCase().indexOf(this.state.searchval.toLowerCase()) >= 0;
    });

    let testmap = subset.map((person, index) => (
      <tr>
        <td>{index + 1}</td>
        <td>{person.Name}</td>
      </tr>
    ));
    this.setState({ testmap });
  };
  componentDidMount(): void {
    this.handleInput();
  }

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
        <Modal show={this.state.show} onHide={this.handleClose}>

          <ModalHeader closeButton>
            <Modal.Title>Lecture Info</Modal.Title>
          </ModalHeader>
          <ModalBody>
            <p>Details:</p>

            <p>Venue: N204, N building (ENTC Main)</p>

            <p>
              12th August 2019, Monday - 4:00 pm to 5:30 pm
              <br/>
              13th August 2019, Tuesday - 3:45 pm to 5:15 pm
              <br/>
              14th August 2019, Wednesday - 3:45 pm to 5:15 pm
            </p>

            <p>
              Here we will teach you all the required basics and
              based on the commitment and potential you show, you
              will be selected in the club.
            </p>

            <p>
              If you wish to join the club, attending this workshop
              is mandatory!
            </p>
          </ModalBody>

        </Modal>
        <Container className="mt-1">
          <Row className="m-3">
            <Col>
              <ListGroup style={{ textAlign: "center", fontWeight: "bold" }}>
                <ListGroupItem variant={"success"}>
                  Congratulations! You have been selected for Coders Era
                </ListGroupItem>
                <ListGroupItem variant={"secondary"}>
                  If your name is not on the list but you have given the first
                  round of Interview, fear not. The introductory course will
                  begin on Monday. More details
                  <Button
                    variant="info"
                    className="ml-3"
                    size={"sm"}
                    style={{ color: "#000" }}
                    onClick={this.handleClick}
                  >
                    Here
                  </Button>

                </ListGroupItem>
                <ListGroupItem variant={"info"}>
                  An introductory meeting will be held on 12th August, 3:30 PM
                  in N204, N building, MIT WPU.
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Control
                    id="hello"
                    as="input"
                    placeholder="Enter Your Name"
                    onChange={this.handleInput}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table bordered variant="dark" striped={true} responsive={true}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>{this.state.testmap}</tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Slots;
