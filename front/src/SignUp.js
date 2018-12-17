import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class SignUp extends Component {
  render() {
    const { updateFieldSignUp, handleSubmitSignUp } = { ...this.props };
    return (
      <div>
        <Link to="/signin">Sign In</Link>
        <h1>Sign Up</h1>
        <form>
          <TextField
            type="email"
            name="email"
            onChange={event => updateFieldSignUp(event)}
            label="Email"
            style={{ width: "80%" }}
          />
          <TextField
            type="password"
            name="password"
            onChange={event => updateFieldSignUp(event)}
            label="Password"
            style={{ width: "80%" }}
          />

          <TextField
            type="password"
            name="passwordBis"
            onChange={event => updateFieldSignUp(event)}
            label="Password Copy"
            style={{ width: "80%" }}
          />

          <TextField
            type="text"
            name="name"
            onChange={event => updateFieldSignUp(event)}
            label="Name"
            style={{ width: "80%" }}
          />

          <TextField
            type="text"
            name="lastname"
            onChange={event => updateFieldSignUp(event)}
            label="Lastname"
            style={{ width: "80%" }}
          />
          <Button
            style={{ width: "50%" }}
            onClick={event => handleSubmitSignUp(event)}
          >
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
