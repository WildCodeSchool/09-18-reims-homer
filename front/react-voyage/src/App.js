import React, { Component } from 'react';
import './App.css';
import SignUp from "./SignUp"
import { MuiThemeProvider, Grid, Paper, } from "@material-ui/core"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import SignIn from './SignIn';
import Profile from './Profile';

class App extends Component {

  render() {
    return (
      <div className="App">
        <MuiThemeProvider  >
          <Grid container
            alignItems='center'
            style={{ height: '100%' }}>
            <Grid item xs={12}>
              <Paper
                elevation={6}
                style={{ margin: 32 }}
              >
                <Grid container
                  alignItems='center'
                  justify='center'>
                  <Grid item xs={12} sm={6}
                    style={{ 'text-align': 'center' }}>
                    <img src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" />
                  </Grid>
                  <Grid item xs={12} sm={6}
                    alignContent='center'
                  >
                    <BrowserRouter>
                      <Switch>
                        <Route path="/(|signin)" component={SignIn} />
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
