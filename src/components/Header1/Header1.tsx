import {Image, Nav, Navbar} from "react-bootstrap";
import React, {Component} from "react";
import bsBreakpoints from "bs-breakpoints";
import logo from "./codersera.png";

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
                <Nav.Link href="#/">Home</Nav.Link>
              <Nav.Link href="#/Slots">Recruitment Slots</Nav.Link>
              <Nav.Link href="#/Events">Events</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header1;
