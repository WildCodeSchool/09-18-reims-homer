import React, { Component } from "react";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      auth: {
        email: "",
        password: "",
        name: "",
        lastname: ""
      },
      flash: ""
    };
    this.updateEmailField = this.updateEmailField.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateLastname = this.updateLastname.bind(this);
  }

  updateEmailField(event) {
    this.setState({ auth: { ...this.state.auth, email: event.target.value } });
  }

  updatePassword(event) {
    this.setState({
      auth: { ...this.state.auth, password: event.target.value }
    });
  }

  updateName(event) {
    this.setState({ auth: { ...this.state.auth, name: event.target.value } });
  }

  updateLastname(event) {
    this.setState({
      auth: { ...this.state.auth, lastname: event.target.value }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("/auth/signup", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(this.state.auth)
    })
      .then(res => res.json())
      .then(
        res => this.setState({ flash: res.flash }),
        err => this.setState({ flash: err.flash })
      );
  }

  render() {
    const myJSON = JSON.stringify(this.state.auth, 1, 1);
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <h1>{myJSON}</h1>
          <input onChange={this.updateEmailField} type="email" name="email" />
          <br />
          <input onChange={this.updatePassword} type="text" />
          <br />
          <input onChange={this.updateName} type="text" />
          <br />
          <input onChange={this.updateLastname} type="text" />
          <br />
          <input type="submit" value="Soumettre" />
        </form>
        <h2>{this.state.flash}</h2>
      </div>
    );
  }
}

export default SignUp;
