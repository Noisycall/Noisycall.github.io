import React, { Component } from "react";
class Counter extends Component {
  incrementer() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  handleincrement = () => {
    this.setState({ value: (this.props.counter.value += 1) });
  };
  handledecrement = () => {
    this.setState({ value: (this.props.counter.value -= 1) });
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-primary"
          onClick={() => this.handledecrement()}
        >
          -
        </button>
        <span className={this.getBadgeClass()}>{this.incrementer()}</span>
        <button
          className="btn btn-primary"
          onClick={() => {
            this.handleincrement();
          }}
        >
          +
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-sm btn-danger m-2"
        >
          Delete
        </button>
        <button
          className="btn btn-outline-warning btn-sm"
          onClick={() => this.props.onReset(this.props.counter.id)}
        >
          Reset Value
        </button>
      </div>
    );
  }
  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}
export default Counter;
