import React, { Component } from "react";
import { MuiThemeProvider, Grid, Paper } from "@material-ui/core";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Profile from "./Profile";

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
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
                  <Grid item xs={12} sm={6}>
                    <BrowserRouter>
                      <Switch>
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
      </div>
    );
  }
}

export default App;
