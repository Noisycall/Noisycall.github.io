import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge"

class Intro extends Component {
  render() {
    return (
      <div style={{ fontFamily: "Source Code Sans" }}>
        <div className="card" style={{ height: "10%" }}>
          <div className="card-body border border-primary">
            <h4 className="card-title text-center font-weight-light text-black-50">
              Coders Era, a place for all computerphiles to learn,improve and
              have fun!
            </h4>
            <p className="card-text">
              <Badge variant="dot" badgeContent={"hello there"} color="primary">
                <Button variant="contained" color="default">
                  Hello
                </Button>
              </Badge>

            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Intro;
