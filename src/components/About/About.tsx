import React, { Component } from "react";

class About extends Component {
  constructor(props: Readonly<{}>) {
    super(props);
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
    return <div>{this.props.children}</div>;
  }
}
export default About;
