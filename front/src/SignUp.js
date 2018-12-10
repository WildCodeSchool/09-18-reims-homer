import React, { Component, Fragment } from "react";
import { TextField, Button, Snackbar } from "@material-ui/core";

class SignUp extends Component {
  render() {
    const { updateField, state, handleSubmit } = { ...this.props };
    return (
      <Fragment>
        <form
          style={{
            margin: "0 auto",
            width: "50%"
          }}
          onSubmit={event => handleSubmit(event)}
        >
          <h1>Sign Up!</h1>
          <TextField
            onChange={event => updateField(event)}
            type="email"
            name="email"
            label="Email"
            placeholder="Votre email"
          />
          <br />
          <TextField
            onChange={event => updateField(event)}
            type="password"
            name="password"
            label="Password"
            placeholder="Votre mot de passe"
          />
          <br />
          <TextField
            onChange={event => updateField(event)}
            type="password"
            name="passwordbis"
            label="Password Bis"
            placeholder="Retappez votre mot de passe"
          />
          <br />
          <TextField
            onChange={event => updateField(event)}
            type="text"
            name="name"
            label="Prénom"
            placeholder="Votre prénom"
          />
          <br />
          <TextField
            onChange={event => updateField(event)}
            type="text"
            name="lastname"
            label="Nom"
            placeholder="Votre nom"
          />
          <br />
          <Button
            onClick={event => handleSubmit(event)}
            variant="contained"
            color="primary"
          >
            Envoyer
          </Button>
        </form>
      </Fragment>
    );
  }
}

export default SignUp;
