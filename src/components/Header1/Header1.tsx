import {Image, Nav, Navbar} from "react-bootstrap";
import React, {Component} from "react";
import bsBreakpoints from "bs-breakpoints";
import logo from "./codersera.png"

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
        <Navbar variant="dark" bg="dark" expand="lg">
          <Navbar.Brand href="/home" style={{width: "200px"}}>
            <Image src={logo} rounded height="10%" width="15%"/>
            <span style={{ color: "#00ff00" }} className="m-1">
              Coders' Era
            </span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="ml-auto"
            onClick={this.resizeEvent}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-right" id="test">
              {/*<Nav.Item>*/}
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="http://codersera.tech/recruitment">
                Recruitment
              </Nav.Link>
              {/*<ButtonGroup vertical={this.state.vertTrue}>
                  <Button href="#/" variant="outline-secondary">
                    Home
                  </Button>
                  <Button variant="outline-secondary" href="http://codersera.tech/recruitment">
                    Recruitment
                  </Button>
                </ButtonGroup>*/}
              {/*</Nav.Item>*/}

              {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
              </NavDropdown>*/}
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
