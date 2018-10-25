import React, { Component } from "react";
import "./App.css";
import SignUp from "./SignUp";

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: "mon@email.com",
      password: "monPassw0rd",
      passwordbis: "passwordBis",
      name: "James",
      lastname: "Bond"
    };
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  updateField(event) {
    let inputName = event.target.name;
    this.setState({
      [inputName]: event.target.value
    });
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
          state={this.state}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
