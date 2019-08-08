import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import slot1 from "./codebeautify.json";
import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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

  handleInput = () => {
    // @ts-ignore
    const searchval = document.getElementById("hello").value;
    this.setState({searchval});
    console.log(this.state.searchval);
    let subset = slot1.filter((person: any) => {
      let na = person.name;
      return na.toLowerCase().indexOf(this.state.searchval.toLowerCase()) >= 0;
    });

    let testmap = subset.map((person, index) => (
      <tr>
        <td>{index + 1}</td>
        <td>{person.name}</td>
        <td>{person.Group}</td>
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
        <Container className="mt-1">
          <Row className="m-3">
            <Col>
              <ListGroup style={{ textAlign: "center", fontWeight: "bold" }}>
                <ListGroupItem variant={"warning"}>
                  If you have registered and do not see your name, please
                  contact us here
                  <Button
                    type={"button"}
                    size={"sm"}
                    variant={"warning"}
                    className="mx-2"
                    href="mailto:recruitment@codersera.tech"
                  >
                    Contact
                  </Button>
                </ListGroupItem>
                <ListGroupItem variant={"danger"}>
                  If you have missed your slots so far, Friday will be the last
                  day for first round of interviews
                </ListGroupItem>
                <ListGroupItem variant={"info"}>Location is N204</ListGroupItem>
                <ListGroupItem variant={"primary"}>
                  Slot 7 - 3:45 - 4:30 PM IST - 2/8/19
                </ListGroupItem>
                <ListGroupItem variant={"secondary"}>
                  Slot 8 - 4:30 - 5:15 PM IST - 2/8/19
                </ListGroupItem>
                <ListGroupItem variant="dark">
                  Slot 9 - 5:15 - 6:00 PM IST - 2/8/19
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
          {/*<Row>
            <Col className={"text-center"}>
              <h3> Search your name is the given field to find your slot</h3>
            </Col>
          </Row>*/}
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
                    <th>Slot</th>
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
