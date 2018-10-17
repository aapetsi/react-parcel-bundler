import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <h1>React Boilerplate</h1>
        <p>Edit App.js in src/components to get started</p>
        <p>
          <strong>Created by {this.props.name}</strong>
        </p>
      </div>
    );
  }
}

export default App;
