import React, { Component } from "react";

class SignUp extends Component {
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
      <div>
        <h1>{this.state.email}</h1>
        <input
          onChange={event => this.updateEmailField(event)}
          type="email"
          name="email"
        />
      </div>
    );
  }
}

export default SignUp;
