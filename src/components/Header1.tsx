import { Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import bsBreakpoints from "bs-breakpoints";

class Header1 extends Component {
  state = {
    vertTrue: false
  };

  resizeEvent = () => {
    if (
      !(
        bsBreakpoints.getCurrentBreakpoint() === "large" ||
        bsBreakpoints.getCurrentBreakpoint() === "xLarge"
      )
    ) {
      this.setState({ vertTrue: true });
    } else this.setState({ vertTrue: false });
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
        {bsBreakpoints.init()}
        {window.onresize = this.resizeEvent}
        <Navbar variant="dark" bg="dark" expand="lg">
          <Navbar.Brand href="#/">
            <Image src="codersera.png" rounded height="6%" width="6%" />
            <span style={{ color: "#00ff00" }} className="m-1">
              Welcome To Coder's Era
            </span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="ml-auto"
            onClick={this.resizeEvent}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-right" id="test">
              <Nav.Item>
                {console.log(bsBreakpoints.getCurrentBreakpoint())}
                <ButtonGroup vertical={this.state.vertTrue}>
                  <Button href="#/" variant="outline-secondary">
                    Home
                  </Button>
                  <Button variant="outline-secondary" href="#wow">
                    Counter
                  </Button>
                </ButtonGroup>
              </Nav.Item>

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/*<Form inline>
                      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                      <Button variant="outline-success">Search</Button>
                  </Form>*/}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header1;
