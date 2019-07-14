import {Image, Nav, Navbar, NavDropdown} from "react-bootstrap";
import React, {Component} from "react";

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
          <Navbar.Brand href="#/" >
            <Image src="codersera.png" rounded height="6%" width="6%"/>
            <span style={{ color: "#00ff00" }} className="m-1">Welcome To Coder's Era</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#/">Home</Nav.Link>
                <Nav.Link href="#wow">Counter</Nav.Link>
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
