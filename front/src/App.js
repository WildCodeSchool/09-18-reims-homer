import React, { Component } from "react";
import "./App.css";
import SignUp from "./SignUp";
import {
  MuiThemeProvider,
  Grid,
  Paper,
  Snackbar,
  Button,
  IconButton
} from "@material-ui/core";

class App extends Component {
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
    return (
      // <MuiThemeProvider>
      //   <SignUp
      //     updateField={this.updateField}
      //     state={this.state}
      //     handleSubmit={this.handleSubmit}
      //   />
      //   <form
      //     method="POST"
      //     enctype="multipart/form-data"
      //     action="uploaddufichier"
      //   >
      //     <input type="file" name="monfichier" multiple />
      //     <button> envoyer </button>
      //   </form>
      // </MuiThemeProvider>
      <div>
        {" "}
        <MuiThemeProvider>
          <Grid container alignItems="center" style={{ height: "100%" }}>
            <Grid item xs={12}>
              <Paper elevation={4} style={{ margin: 32 }}>
                <Grid container alignItems="center" justify="center">
                  <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
                    <img src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <SignUp
                      state={this.state}
                      handleSubmit={this.handleSubmit}
                      updateField={this.updateField}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </MuiThemeProvider>
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
      </div>
    );
  }
}

export default App;
