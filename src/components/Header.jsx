import React, { Component } from "react";
class Header extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <span className="h3">Welcome to Coders Era!</span>
          <span className="btn-group-sm m-1 float-right" role="group">
            <button type="button" className="btn btn-primary">
              About
            </button>
            <button type="button" className="btn btn-primary">
              Projects
            </button>
            <button type="button" className="btn btn-primary">
              MIT WPU
            </button>
          </span>
        </div>
      </div>
      
    );
  }
}
export default Header;
