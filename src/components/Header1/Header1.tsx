import { Image, Nav, Navbar } from "react-bootstrap";
import React, { Component } from "react";
import logo from "./codersera.png";

class Header1 extends Component {
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
          <Navbar.Brand href="/home" style={{ width: "200px" }}>
            <Image
              src={logo}
              rounded
              height="10%"
              width="15%"
              alt="Brand Coders Era"
            />
            <span style={{ color: "#00ff00" }} className="m-1">
              Coders' Era
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-right" id="test">
              <Nav.Link href="/home/">Home</Nav.Link>
              <Nav.Link href="/home/Slots">Recruitment Slots</Nav.Link>
              <Nav.Link href="/home/Events">Events</Nav.Link>
              <Nav.Link href="/home/Eklavya">Eklavya</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header1;
