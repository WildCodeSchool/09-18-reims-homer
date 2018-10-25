import React, { Component } from "react";
import SignUp from "./SignUp";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      passwordBis: "",
      name: "",
      lastname: ""
    };
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateField(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <SignUp
          updateField={this.updateField}
          account={this.state}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
