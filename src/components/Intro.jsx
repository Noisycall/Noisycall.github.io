import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge"
import {Jumbotron} from "react-bootstrap";

class Intro extends Component {
  render() {
    return (
      <div>
        <Jumbotron >
          <h1 align="center">
            Welcome to Coder's Era, a place for programmers to learn and succeed
          </h1>
        </Jumbotron>

      </div>
    );
  }
}
export default Intro;
