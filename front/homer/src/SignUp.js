import React, { Component } from "react";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      passwordbis: "",
      name: "",
      lastname: ""
    };
    this.updateEmailField = this.updateEmailField.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updatePasswordbis = this.updatePasswordbis.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateLastname = this.updateLastname.bind(this);
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
