import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

class Footer extends Component {
    handleScroll = () => {
        window.scroll(0, 0);
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
            <div className="mt-3">
                <Navbar bg="dark" variant="dark" expand={"lg"}>

                    <Button variant="secondary" href="mailto:recruitment@codersera.tech">
                        Contact Us
                    </Button>

                    <Button
                        variant="secondary"
                        className="ml-auto"
                        onClick={this.handleScroll}
                    >
                        Scroll to Top
                    </Button>

                </Navbar>
            </div>
        );
    }
}

export default Footer;
