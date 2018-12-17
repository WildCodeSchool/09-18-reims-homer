import React, { Component } from "react";
import "./App.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Profile from "./Profile";
import { Container } from "reactstrap";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#11cb5f" }
  },
  typography: { useNextVariants: true }
});
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      flash: ""
    };
  }

  render() {
    return (
      <Container>
        <header className="text-center">Homer Odyssey</header>
        <MuiThemeProvider theme={theme}>
          <Grid container alignItems="center" style={{ height: "100%" }}>
            <Grid item xs={12}>
              <Paper elevation={24} style={{ margin: 32 }}>
                <Grid container alignItems="center" justify="center">
                  <Grid item xs={12} sm={6}>
                    <img
                      src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png"
                      alt="Homer pics"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    // style={{ border: "2px solid #c19a0b" }}
                  >
                    {/* <Profile /> */}
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
      </Container>
    );
  }
}

export default App;
