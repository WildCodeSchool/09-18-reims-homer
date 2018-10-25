import React, { Component } from "react";

class SignUp extends Component {
  render() {
    const { updateEmailField, email } = { ...this.props };
    return (
      <div>
        <h1>{email}</h1>
        <input
          type="email"
          name="email"
          onChange={event => updateEmailField(event)}
          value={email}
        />
      </div>
    );
  }
}

export default SignUp;
