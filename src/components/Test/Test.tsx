import React, { Component } from "react";

class Test extends Component {
  state = { users: [] };

  componentDidMount(): void {
    fetch("http://192.168.1.8:3001/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(({ id, username }) => (
          <div key={id}>{username}</div>
        ))}
      </div>
    );
  }
}

export default Test;
