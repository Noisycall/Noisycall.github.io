import React, { Component } from "react";
class Counter extends Component {
  incrementer() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  handleincrement = product => {
    console.log(product);
    this.setState({ value: (this.props.counter.value += 1) });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.incrementer()}</span>
        <button
          className="btn btn-secondary btn-lr"
          onClick={() => {
            this.handleincrement({ id: 1 });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-sm btn-danger m-2"
        >
          Delete
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
