import React, { Component } from "react";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "mon@email.com",
      password: "monPassw0rd",
      passwordbis: "monPassw0rd",
      name: "James",
      lastname: "Bond",
      flash: ""
    };
    this.updateEmailField = this.updateEmailField.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updatePasswordbis = this.updatePasswordbis.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateLastname = this.updateLastname.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateEmailField(event) {
    this.setState({ email: event.target.value });
  }

  updatePassword(event) {
    this.setState({ password: event.target.value });
  }

  updatePasswordbis(event) {
    this.setState({ passwordbis: event.target.value });
  }

  updateName(event) {
    this.setState({ name: event.target.value });
  }

  updateLastname(event) {
    this.setState({ lastname: event.target.value });
  }

  handleSubmit(event) {
    console.log("A name was submitted: " + JSON.stringify(this.state, 1, 1));
    fetch("/auth/signup", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(this.state)
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
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <h1>{JSON.stringify(this.state, 1, 1)}</h1>{" "}
          <input onChange={this.updateEmailField} type="email" name="email" />
          <input onChange={this.updatePassword} type="text" />
          <input onChange={this.updatePasswordbis} type="text" />
          <input onChange={this.updateName} type="text" />
          <input onChange={this.updateLastname} type="text" />
          <input type="submit" value="Soumettre" />
        </form>
      </div>
    );
  }
}

export default SignUp;
