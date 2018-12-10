import React, { Component } from "react";
import SignUp from "./SignUp";

import "./App.css";
import FormUploadImage from "./FormUploadImage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      passwordBis: "",
      name: "",
      lastname: "",
      flash: ""
    };
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateField(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("/auth/signup", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        lastname: this.state.lastname
      })
    })
      .then(res => res.json())
      .then(
        res => this.setState({ flash: res.flash }),
        err => this.setState({ flash: err.flash })
      );
  }
  render() {
    return (
      <div className="App">
        <SignUp
          updateField={this.updateField}
          account={this.state}
          handleSubmit={this.handleSubmit}
        />
        <FormUploadImage />
      </div>
    );
  }
}

export default App;
