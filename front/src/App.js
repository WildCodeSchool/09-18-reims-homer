import React, { Component } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

import FlashMessage from "./FlashMessage";
import Profile from "./Profile";

import { Switch, Route, withRouter } from "react-router-dom";

import "./App.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      signUp: {
        email: "",
        password: "",
        passwordBis: "",
        name: "",
        lastname: ""
      },
      signIn: {
        email: "",
        password: ""
      },
      profile: {
        email: "homer.simpson@wildcodeschool.fr",
        name: "Homer",
        lastname: "Simpson"
      },
      auth: false,
      flash: "",
      openFlash: false
    };
    this.updateFieldSignUp = this.updateFieldSignUp.bind(this);
    this.handleSubmitSignUp = this.handleSubmitSignUp.bind(this);
    this.updateFieldSignIn = this.updateFieldSignIn.bind(this);
    this.handleSubmitSignIn = this.handleSubmitSignIn.bind(this);
    this.handleCloseFlashMessage = this.handleCloseFlashMessage.bind(this);
  }

  updateFieldSignUp(event) {
    this.setState({
      signUp: { ...this.state.signUp, [event.target.name]: event.target.value }
    });
  }
  updateFieldSignIn(event) {
    this.setState({
      signIn: { ...this.state.signIn, [event.target.name]: event.target.value }
    });
  }

  handleCloseFlashMessage() {
    this.setState({ flash: "", openFlash: false });
  }

  handleSubmitSignUp(event) {
    event.preventDefault();
    fetch("/auth/signup", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({
        email: this.state.signUp.email,
        password: this.state.signUp.password,
        name: this.state.signUp.name,
        lastname: this.state.signUp.lastname
      })
    })
      .then(res => res.json())
      .then(res =>
        this.setState({ flash: res.flash, openFlash: true }, () => {
          if (res.type === "success") {
            this.props.history.push("/");
          }
        })
      );
  }

  handleSubmitSignIn(event) {
    event.preventDefault();
    fetch("/auth/signin", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({
        email: this.state.signIn.email,
        password: this.state.signIn.password
      })
    })
      .then(res => res.json())
      .then(res => {
        this.setState(
          {
            flash: res.flash,
            openFlash: true
          },
          () => {
            if (res.type === "success") {
              this.props.history.push("/profile");
            }
          }
        );
      });
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
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <SignIn
                        updateFieldSignIn={this.updateFieldSignIn}
                        account={this.state.signIn}
                        handleSubmitSignIn={this.handleSubmitSignIn}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/signin"
                    render={() => (
                      <SignIn
                        updateFieldSignIn={this.updateFieldSignIn}
                        account={this.state.signIn}
                        handleSubmitSignIn={this.handleSubmitSignIn}
                      />
                    )}
                  />
                  <Route
                    path="/signup"
                    render={() => (
                      <SignUp
                        updateFieldSignUp={this.updateFieldSignUp}
                        account={this.state.signUp}
                        handleSubmitSignUp={this.handleSubmitSignUp}
                      />
                    )}
                  />
                  <Route
                    path="/profile"
                    render={() => <Profile {...this.state.profile} />}
                  />
                </Switch>
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

export default withRouter(App);
