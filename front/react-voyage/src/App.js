import React, { Component } from 'react';
import './App.css';
import SignUp from "./SignUp"
import { MuiThemeProvider, Grid, Paper, } from "@material-ui/core"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "test@test.com",
      password: "",
      passwordbis: "",
      name: "",
      lastname: "",
      flash: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  };
  handleSubmit = (event) => {
    event.preventDefault();
    fetch("/auth/signup",
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(this.state),
      })
      .then(res => res.json())
      .then(
        res => this.setState({ flash: res.flash }),
        err => this.setState({ flash: err.flash })
      )
  };



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
                    <SignUp state={this.state}
                      handleInputChange={this.handleInputChange}
                      handleSubmit={this.handleSubmit} />
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
