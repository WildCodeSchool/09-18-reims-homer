import React, { Component } from "react";
import SignUp from "./SignUp";
// import FormUpload from "./FormUpload";
import { Grid, Paper } from "@material-ui/core";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Grid container alignItems="center" style={{ height: "100%" }}>
            <Grid item xs={12}>
              <Paper elevation={4} style={{ margin: 32 }}>
                <Grid container alignItems="center" justify="center">
                  <Grid item xs={12} sm={6}>
                    <img
                      src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png"
                      alt=""
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <SignUp />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          {/* <FormUpload /> */}
        </header>
      </div>
    );
  }
}

export default App;
