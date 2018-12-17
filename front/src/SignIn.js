import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class SignIn extends Component {
  render() {
    const { updateFieldSignIn, handleSubmitSignIn } = {
      ...this.props
    };
    return (
      <div>
        <Link to="/signup">Sign Up</Link>
        <h1>Sign In</h1>
        <form>
          <TextField
            type="email"
            name="email"
            onChange={event => updateFieldSignIn(event)}
            label="Email"
            style={{ width: "80%" }}
          />
          <TextField
            type="password"
            name="password"
            onChange={event => updateFieldSignIn(event)}
            label="Password"
            style={{ width: "80%" }}
          />

          <Button
            style={{ width: "50%" }}
            onClick={event => handleSubmitSignIn(event)}
          >
            Sign In
          </Button>
        </form>
      </div>
    );
  }
}

export default SignIn;
