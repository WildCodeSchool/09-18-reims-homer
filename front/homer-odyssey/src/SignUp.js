import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordBis: "",
      name: "",
      lastname: ""
    };
    this.updateNameField = this.updateNameField.bind(this);
    this.updateLastnameField = this.updateLastnameField.bind(this);
    this.updatePasswordField = this.updatePasswordField.bind(this);
    this.updatePasswordBisField = this.updatePasswordBisField.bind(this);
    this.updateEmailField = this.updateEmailField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  updateNameField(event) {
    this.setState({ name: event.target.value });
  }
  updateLastnameField(event) {
    this.setState({ lastname: event.target.value });
  }
  updatePasswordField(event) {
    this.setState({ password: event.target.value });
  }
  updatePasswordBisField(event) {
    this.setState({ passwordBis: event.target.value });
  }
  updateEmailField(event) {
    this.setState({ email: event.target.value });
  }
  handleSubmit(event) {
    console.log(
      `A name has been submitted :${JSON.stringify(this.state, 1, 1)}`
    );
    fetch("/auth/signup", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({
        name: this.state.name,
        lastname: this.state.lastname,
        password: this.state.password,
        email: this.state.email
      })
    })
      .then(res => res.json())
      .then(
        res => this.setState({ flash: res.flash }),
        err => this.setState({ flash: err.flash })
      );
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{JSON.stringify(this.state, 1, 1)}</h1>
        <input type="name" name="name" onChange={this.updateNameField} />
        <input
          type="lastname"
          name="lastname"
          onChange={this.updateLastnameField}
        />
        <input
          type="password"
          name="password"
          onChange={this.updatePasswordField}
        />
        <input
          type="password"
          name="passwordBis"
          onChange={this.updatePasswordBisField}
        />
        <input type="email" name="email" onChange={this.updateEmailField} />
        <input type="submit" value="Soumettre" />
      </form>
    );
  }
}

export default SignUp;
