import React, { Component } from "react";
import "./App.css";
import Profile from "./Profile";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  MuiThemeProvider,
  Grid,
  Paper,
  Snackbar,
  Button,
  IconButton
} from "@material-ui/core";

class App extends Component {
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
                    <BrowserRouter>
                      <Switch>
                        <Route exact path="/" component={SignIn} />
                        <Route exact path="/signin" component={SignIn} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/profile" component={Profile} />
                      </Switch>
                    </BrowserRouter>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
