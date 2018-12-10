import React, { Component } from "react";
import { MuiThemeProvider, Grid, Paper } from "@material-ui/core";
import "./App.css";
import SignUp from "./SignUp";

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
                  <Grid item xs={12} sm={6} alignContent="center">
                    <SignUp />
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
