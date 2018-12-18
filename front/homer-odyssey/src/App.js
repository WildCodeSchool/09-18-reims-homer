import React, { Component } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
// import FormUpload from "./FormUpload";
import { Grid, Paper } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Profile from "./Profile";

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
                    <Router>
                      <Switch>
                        <Route exact path="/(|signin)" component={SignIn} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/profile" component={Profile} />
                      </Switch>
                    </Router>
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
