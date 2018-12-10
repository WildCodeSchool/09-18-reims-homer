import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class SignUp extends Component {
  render() {
    const { updateField, handleSubmit } = { ...this.props };
    return (
      <div>
        <h1>Sign Up</h1>
        <form>
          <TextField
            type="email"
            name="email"
            onChange={event => updateField(event)}
            label="Email"
            style={{ width: "80%" }}
          />
          <TextField
            type="password"
            name="password"
            onChange={event => updateField(event)}
            label="Password"
            style={{ width: "80%" }}
          />

          <TextField
            type="password"
            name="passwordBis"
            onChange={event => updateField(event)}
            label="Password Copy"
            style={{ width: "80%" }}
          />

          <TextField
            type="text"
            name="name"
            onChange={event => updateField(event)}
            label="Name"
            style={{ width: "80%" }}
          />

          <TextField
            type="text"
            name="lastname"
            onChange={event => updateField(event)}
            label="Lastname"
            style={{ width: "80%" }}
          />
          <Button
            style={{ width: "50%" }}
            onClick={event => handleSubmit(event)}
          >
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
