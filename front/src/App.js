import React, { Component } from "react";
import SignUp from "./SignUp";

import "./App.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FlashMessage from "./FlashMessage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      passwordBis: "",
      name: "",
      lastname: "",
      flash: "",
      openFlash: false
    };
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCloseFlashMessage = this.handleCloseFlashMessage.bind(this);
  }

  updateField(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCloseFlashMessage() {
    this.setState({ flash: "", openFlash: false });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("/auth/signup", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        lastname: this.state.lastname
      })
    })
      .then(res => res.json())
      .then(
        res => this.setState({ flash: res.flash, openFlash: true }),
        err => this.setState({ flash: err.flash, openFlash: true })
      );
  }
  render() {
    return (
      <Grid container alignItems="center" style={{ height: "100%" }}>
        <Grid item xs={12}>
          <Paper elevation={4} style={{ margin: 32 }}>
            <Grid container alignItems="center" justify="center">
              <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
                <img
                  src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png"
                  alt="homer"
                />
              </Grid>
              <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
                <SignUp
                  updateField={this.updateField}
                  account={this.state}
                  handleSubmit={this.handleSubmit}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <FlashMessage
          handleCloseFlashMessage={this.handleCloseFlashMessage}
          flashMessage={this.state.flash}
          openFlashMessage={this.state.openFlash}
        />
      </Grid>
    );
  }
}

export default App;
