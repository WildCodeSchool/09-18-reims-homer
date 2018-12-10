import React, { Component } from "react";
import { TextField, Button, Snackbar, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

class SignUp extends Component {
  state = {
    open: false
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "mon@email.com",
      password: "monPassw0rd",
      passwordbis: "monPassw0rd",
      name: "James",
      lastname: "Bond",
      flash: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  updateEmailField(event) {
    this.setState({ email: event.target.value });
  }
  updatePasswordField(event) {
    this.setState({ password: event.target.value });
  }
  updatePasswordbisField(event) {
    this.setState({ passwordbis: event.target.value });
  }
  updateNameField(event) {
    this.setState({ name: event.target.value });
  }
  updateLastnameField(event) {
    this.setState({ lastname: event.target.value });
  }

  handleSubmit(event) {
    console.log("A name was submitted: " + JSON.stringify(this.state, 1, 1));
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
        res => this.setState({ flash: res.flash, open: true }),
        err => this.setState({ flash: err.flash, open: true })
      );

    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
            message={<span id="message-id">Note archived</span>}
            action={[
              <Button
                key="undo"
                color="secondary"
                size="small"
                onClick={this.handleClose}
              >
                UNDO
              </Button>,
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={this.handleClose}
              >
                <CloseIcon />
              </IconButton>
            ]}
          />
          <h3>E-mail</h3>
          <TextField
            onChange={this.updateEmailField.bind(this)}
            type="email"
            name="email"
          />

          <h3>Password</h3>
          <TextField
            onChange={this.updatePasswordField.bind(this)}
            type="password"
            name="password"
          />
          <TextField
            onChange={this.updatePasswordbisField.bind(this)}
            type="password"
            name="passwordbis"
          />

          <h3>Name</h3>
          <TextField
            onChange={this.updateNameField.bind(this)}
            type="text"
            name="name"
          />

          <h3>LastName</h3>
          <TextField
            onChange={this.updateLastnameField.bind(this)}
            type="text"
            name="lastname"
          />
          <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            value="Soumettre"
          >
            Soumettre
          </Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
