import React, { Component, Fragment } from "react";
import {
  MuiThemeProvider,
  Grid,
  Paper,
  Snackbar,
  Button,
  TextField,
  IconButton
} from "@material-ui/core";
import { Link } from "react-router-dom";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "mon@email.com",
      password: "monPassw0rd",
      passwordbis: "monPassw0rd",
      name: "James",
      lastname: "Bond",
      flash: "",
      open: false
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
    fetch("/auth/signup", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        lastname: this.state.lastname
      })
    })
      .then(res => res.json())
      .then(
        res => this.setState({ flash: res.flash }),
        err => this.setState({ flash: err.flash })
      )
      .then(this.setState({ open: true }));
  }

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };
  render() {
    const { updateField, state, handleSubmit } = { ...this.props };
    return (
      <Fragment>
        <form
          style={{
            margin: "0 auto",
            width: "50%"
          }}
          onSubmit={event => this.handleSubmit(event)}
        >
          <h1>Sign Up!</h1>
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
          <TextField
            onChange={event => this.updateField(event)}
            type="password"
            name="passwordbis"
            label="Password Bis"
            placeholder="Retappez votre mot de passe"
          />
          <br />
          <TextField
            onChange={event => this.updateField(event)}
            type="text"
            name="name"
            label="Prénom"
            placeholder="Votre prénom"
          />
          <br />
          <TextField
            onChange={event => this.updateField(event)}
            type="text"
            name="lastname"
            label="Nom"
            placeholder="Votre nom"
          />
          <br />
          <Link to="/signin">
            <Button variant="contained" color="secondary">
              J'ai un compte !
            </Button>
          </Link>
          <Link to="/">
            <Button
              // onClick={event => this.handleSubmit(event)}
              variant="contained"
              color="primary"
            >
              Envoyer
            </Button>
          </Link>
        </form>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">{this.state.flash}</span>}
          action={[
            <Button
              key="undo"
              color="secondary"
              size="small"
              onClick={this.handleClose}
            >
              CLOSE
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            />
          ]}
        />
      </Fragment>
    );
  }
}

export default SignUp;
