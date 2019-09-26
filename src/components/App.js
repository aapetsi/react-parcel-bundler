import React, { Component } from "react";
import "../styles/index.scss";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>React Boilerplate</h1>
        <p>Edit App.js in src/components to get started</p>
        <p>
          <strong>Created by {this.props.name}</strong>
        </p>
        <p>To begin, edit App.js</p>
      </div>
    );
  }
}

export default App;
