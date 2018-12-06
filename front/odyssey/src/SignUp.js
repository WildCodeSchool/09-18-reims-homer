import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: {
        email: "mon@email.com",
        password: "monPassw0rd",
        firstname: "James",
        lastname: "Bond"
      },
      flash: "fail"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeUpdateEmailField(event) {
    this.setState({ auth: { ...this.state.auth, email: event.target.value } });
  }
  onChangeUpdatePasswordField(event) {
    this.setState({
      auth: { ...this.state.auth, password: event.target.value }
    });
  }
  onChangeUpdateFirstnameField(event) {
    this.setState({
      auth: { ...this.state.auth, firstname: event.target.value }
    });
  }
  onChangeUpdateLastnameField(event) {
    this.setState({
      auth: { ...this.state.auth, lastname: event.target.value }
    });
  }

  handleSubmit(event) {
    console.log(
      "A name was submitted: " + JSON.stringify(this.state.auth, 1, 1)
    );
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
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Email: {this.state.auth.email}</h1>
          <input
            onChange={this.onChangeUpdateEmailField.bind(this)}
            type="email"
            name="email"
          />
          <h1>Password: {this.state.auth.password}</h1>
          <input
            onChange={this.onChangeUpdatePasswordField.bind(this)}
            type="password"
            name="password"
          />
          <h1>Firstname: {this.state.auth.firstname}</h1>
          <input
            onChange={this.onChangeUpdateFirstnameField.bind(this)}
            type="text"
            name="text"
          />
          <h1>Lastname: {this.state.auth.lastname}</h1>
          <input
            onChange={this.onChangeUpdateLastnameField.bind(this)}
            type="text"
            name="text"
          />

          <input type="submit" value="Soumettre" />
        </form>
      </div>
    );
  }
}

export default SignUp;
