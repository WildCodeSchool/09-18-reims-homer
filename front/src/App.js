import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SignUp from "./SignUp";

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: ""
    };
    this.updateEmailField = this.updateEmailField.bind(this);
  }
  updateEmailField(event) {
    this.setState({
      email: event.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <SignUp
          updateEmailField={this.updateEmailField}
          email={this.state.email}
        />
      </div>
    );
  }
}

export default App;
