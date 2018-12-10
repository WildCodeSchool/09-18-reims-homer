import React, { Component } from "react";
import { TextField, Button, Snackbar } from "@material-ui/core";

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
    this.updateEmailField = this.updateEmailField.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updatePasswordbis = this.updatePasswordbis.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateLastname = this.updateLastname.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateEmailField(event) {
    this.setState({ email: event.target.value });
  }

  updatePassword(event) {
    this.setState({ password: event.target.value });
  }

  updatePasswordbis(event) {
    this.setState({ passwordbis: event.target.value });
  }

  updateName(event) {
    this.setState({ name: event.target.value });
  }

  updateLastname(event) {
    this.setState({ lastname: event.target.value });
  }

  handleClick = () => {
    this.setState({
      open: true
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

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
          {/* <h1>{JSON.stringify(this.state, 1, 1)}</h1>  */}
          <h4>E-mail</h4>
          <TextField
            onChange={this.updateEmailField}
            type="email"
            name="email"
          />
          <h4>Password</h4>
          <TextField
            onChange={this.updatePassword}
            type="password"
            name="password"
          />
          <h4>Repeat password</h4>
          <TextField
            onChange={this.updatePasswordbis}
            type="password"
            name="passwordbis"
          />
          <h4>Name</h4>
          <TextField onChange={this.updateName} type="text" name="name" />
          <h4>Lastname</h4>
          <TextField
            onChange={this.updateLastname}
            type="text"
            name="lastname"
          />
          <br />
          <br />
          <Button
            color="primary"
            variant="contained"
            type="submit"
            value="Soumettre"
            onClick={this.handleClick}
          >
            Valider
          </Button>
          <Snackbar
            open={this.state.open}
            message="Vous êtes inscrit !!"
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
          />
        </form>
      </div>
    );
  }
}

export default SignUp;
