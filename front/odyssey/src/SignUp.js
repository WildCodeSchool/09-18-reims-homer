import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "mon@email.com",
      password: "monPassw0rd",
      passwordbis: "monPassw0rdBis",
      firstname: "James",
      lastname: "Bond"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeUpdateEmailField(event) {
    this.setState({ email: event.target.value });
  }
  onChangeUpdatePasswordField(event) {
    this.setState({ password: event.target.value });
  }
  onChangeUpdatePasswordbisField(event) {
    this.setState({ passwordbis: event.target.value });
  }
  onChangeUpdateFirstnameField(event) {
    this.setState({ firstname: event.target.value });
  }
  onChangeUpdateLastnameField(event) {
    this.setState({ lastname: event.target.value });
  }

  handleSubmit(event) {
    console.log("A name was submitted: " + JSON.stringify(this.state, 1, 1));
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Email: {this.state.email}</h1>
          <input
            onChange={this.onChangeUpdateEmailField.bind(this)}
            type="email"
            name="email"
          />
          <h1>Password: {this.state.password}</h1>
          <input
            onChange={this.onChangeUpdatePasswordField.bind(this)}
            type="password"
            name="password"
          />
          <h1>Repeat password: {this.state.passwordbis}</h1>
          <input
            onChange={this.onChangeUpdatePasswordbisField.bind(this)}
            type="password"
            name="password"
          />
          <h1>Firstname: {this.state.firstname}</h1>
          <input
            onChange={this.onChangeUpdateFirstnameField.bind(this)}
            type="text"
            name="text"
          />
          <h1>Lastname: {this.state.lastname}</h1>
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
