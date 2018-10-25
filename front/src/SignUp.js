import React, { Component } from "react";

class SignUp extends Component {
  render() {
    const { email, updateEmailField } = { ...this.props };
    return (
      <div>
        <h1>{email}</h1>
        <input
          onChange={event => updateEmailField(event)}
          type="email"
          name="email"
        />
      </div>
    );
  }
}

export default SignUp;
