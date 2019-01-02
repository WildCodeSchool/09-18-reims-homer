import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2
  }
});

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordBis: "",
      name: "",
      lastname: "",
      open: false
    };
    this.updateNameField = this.updateNameField.bind(this);
    this.updateLastnameField = this.updateLastnameField.bind(this);
    this.updatePasswordField = this.updatePasswordField.bind(this);
    this.updatePasswordBisField = this.updatePasswordBisField.bind(this);
    this.updateEmailField = this.updateEmailField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  updateNameField(event) {
    this.setState({ name: event.target.value });
  }
  updateLastnameField(event) {
    this.setState({ lastname: event.target.value });
  }
  updatePasswordField(event) {
    this.setState({ password: event.target.value });
  }
  updatePasswordBisField(event) {
    this.setState({ passwordBis: event.target.value });
  }
  updateEmailField(event) {
    this.setState({ email: event.target.value });
  }
  handleSubmit(event) {
    console.log(
      `A name has been submitted :${JSON.stringify(this.state, 1, 1)}`
    );
    fetch("/auth/signup", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({
        name: this.state.name,
        lastname: this.state.lastname,
        password: this.state.password,
        email: this.state.email
      })
    })
      .then(res => res.json())
      .then(
        res => {
          this.setState({ flash: res.flash, open: true });
        },
        err => {
          this.setState({ flash: err.flash, open: true });
        }
      );
    event.preventDefault();
  }
  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ textAlign: "left", margin: "5%" }}
      >
        <p style={{ fontWeight: "bold" }}>Sign up !</p>
        <TextField
          type="email"
          name="email"
          label="Email"
          onChange={this.updateEmailField}
          fullWidth
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          onChange={this.updatePasswordField}
          fullWidth
        />
        <TextField
          type="password"
          name="passwordBis"
          label="Confirm password"
          onChange={this.updatePasswordBisField}
          fullWidth
        />
        <TextField
          type="name"
          name="name"
          label="Name"
          onChange={this.updateNameField}
          fullWidth
        />
        <TextField
          type="lastname"
          name="lastname"
          label="Lastname"
          onChange={this.updateLastnameField}
          fullWidth
        />
        <div style={{ textAlign: "right", margin: "5%" }}>
          <Link to="/signin">
            <Button variant="contained" color="primary">
              Registered already ?
            </Button>
          </Link>
          {/* <Link to="/"> */}
            <Button
              type="submit"
              variant="contained"
              value="Soumettre"
              color="primary"
            >
              SUBMIT
            </Button>
          {/* </Link> */}
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={
            <span id="message-id">
              {this.state.flash === "User has been signed up !"
                ? this.state.flash
                : "An error occurred..."}
            </span>
          }
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
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </form>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignUp);
