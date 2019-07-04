import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleDelete = counterid => {
    const counters = this.state.counters.filter(c => c.id !== counterid);
    this.setState({ counters });
  };
  handleReset = counterId => {
    this.state.counters[counterId - 1].value = 0;
    this.setState(this.state.counters);
  };
  handleReset1 = () => {
    this.state.counters = [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ];
    this.setState(this.state);
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-sm btn-primary m-2"
          onClick={this.handleReset1}
        >
          Reset All
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
            onReset={this.handleReset}
          />
        ))}
      </div>
    );
  }
}
export default Counters;
