import React, { Component } from "react";
import "./App.css";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Profile from "./Profile";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ height: "100%" }}
        >
          <Grid item xs={12} sm={6}>
            <Paper elevation={6} style={{ margin: 32 }}>
              <Grid
                container
                alignItems="center"
                alignContent="center"
                justify="center"
              >
                <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
                  <img
                    src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png"
                    alt="homer"
                  />
                </Grid>
                <Grid
                  container
                  item
                  xs={12}
                  sm={6}
                  justify="center"
                  style={{ textAlign: "center" }}
                >
                  <BrowserRouter>
                    <Switch>
                      <Route exact path="/" component={SignIn} />
                      <Route path="/signup" component={SignUp} />
                      <Route path="/signin" component={SignIn} />
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
