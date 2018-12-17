import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import Grid from "@material-ui/core/Grid";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Paper from "@material-ui/core/Paper";

import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Profile from "./Profile";
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Grid container alignItems="center" style={{ height: "100%" }}>
          <Grid item xs={12}>
            <Paper elevation={4} style={{ margin: 32 }}>
              <Grid container alignItems="center" justify="center">
                <Grid item xs={12} sm={6} style={{ "text-align": "center" }}>
                  <img src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <BrowserRouter>
                    <Switch>
                      <Route exact path="/" component={SignIn} />
                      <Route path="/signin" component={SignIn} />
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
    );
  }
}

export default App;
