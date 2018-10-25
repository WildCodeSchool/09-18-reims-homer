import React, { Component } from "react";

class SignUp extends Component {
  render() {
    const { updateField, account, handleSubmit } = { ...this.props };
    return (
      <div>
        <h1>{JSON.stringify(account, 1, 1)}</h1>
        <form onSubmit={event => handleSubmit(event)}>
          <input
            type="email"
            name="email"
            onChange={event => updateField(event)}
          />
          <input
            type="password"
            name="password"
            onChange={event => updateField(event)}
          />

          <input
            type="password"
            name="passwordBis"
            onChange={event => updateField(event)}
          />

          <input
            type="text"
            name="name"
            onChange={event => updateField(event)}
          />

          <input
            type="text"
            name="lastname"
            onChange={event => updateField(event)}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default SignUp;
