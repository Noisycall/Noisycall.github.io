import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import slot1 from "./codebeautify.json";
import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

class Slots extends Component {
  state = {
    searchval: "",
    testmap: undefined
  };
  testmap = slot1.map((person, index) => (
      <tr>
        <td>{index + 1}</td>
        <td>{person.name}</td>
        <td>{person.Group}</td>
      </tr>
  ));
  subset = slot1.filter(person => person.name === this.state.searchval);

  handleInput = () => {
    // @ts-ignore
    const searchval = document.getElementById("hello").value;
    this.state.searchval = searchval;
    console.log(this.state.searchval);
    let subset = slot1.filter(person => person.name === this.state.searchval);
    // @ts-ignore
    this.state.testmap = slot1.map((person, index) => (
        <tr>
          <td>{index + 1}</td>
          <td>{person.name}</td>
          <td>{person.Group}</td>
        </tr>
    ));
    this.setState(this.state);
  };

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
          <Container className="mt-1">
            <Row className="m-3">
              <Col>
                <ListGroup style={{fontWeight: "bold"}}>
                  <ListGroupItem variant={"warning"}>
                    If you have registered and do not see your name, your slot may
                    be for later, check again soon
                  </ListGroupItem>
                  <ListGroupItem variant={"primary"}>
                    Slot 1 - 3:45 - 4:45 PM IST - 30/7/19
                  </ListGroupItem>
                  <ListGroupItem variant={"secondary"}>
                    Slot 2 - 4:45 - 5:45 PM IST - 30/7/19
                  </ListGroupItem>
                </ListGroup>
              </Col>
            </Row>
            {/*<Row>
            <Col className={"text-center"}>
              Search your name is the given field to find your slot
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    id="hello"
                    as="input"
                    placeholder="Enter Your Name"
                    onChange={this.handleInput}
                  />

                  <Form.Text className="text-muted">
                    Enter your name here to find it
                  </Form.Text>
                </Form.Group>
              </Form>
            </Col>
          </Row>*/}
            <Row>
              <Col>
                <Table bordered variant="dark" striped={true} responsive={true}>
                  <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Slot</th>
                  </tr>
                  </thead>
                  <tbody>{this.testmap}</tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export default Slots;
