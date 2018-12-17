import React, { Component, Fragment } from "react";
import { TextField, Button, Snackbar } from "@material-ui/core";
import { Link } from "react-router-dom";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "mon@email.com",
      password: "monPassw0rd"
    };
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  updateField(event) {
    let inputName = event.target.name;
    this.setState({
      [inputName]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("/auth/signin", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(
        res => this.setState({ flash: res.flash }),
        err => this.setState({ flash: err.flash })
      )
      .then(this.setState({ open: true }));
  }

  render() {
    return (
      <Fragment>
        <form
          style={{
            margin: "0 auto",
            width: "50%"
          }}
          onSubmit={event => this.handleSubmit(event)}
        >
          <h1>Sign In!</h1>
          <TextField
            onChange={event => this.updateField(event)}
            type="email"
            name="email"
            label="Email"
            placeholder="Votre email"
          />
          <br />
          <TextField
            onChange={event => this.updateField(event)}
            type="password"
            name="password"
            label="Password"
            placeholder="Votre mot de passe"
          />
          <br />
          <Link to="/signup">
            <Button variant="contained" color="secondary">
              Pas encore inscrit ?
            </Button>
          </Link>

          <Button variant="contained" color="primary">
            Se connecter
          </Button>
        </form>
      </Fragment>
    );
  }
}

export default SignUp;
