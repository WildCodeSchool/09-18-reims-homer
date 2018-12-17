import React, { Component } from "react";
import { Row } from "reactstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import styles from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: {
        email: "mon@email.com",
        password: "monPassw0rd"
      },
      flash: "Vous êtes inscrit !",
      open: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeUpdateEmailField(event) {
    this.setState({ auth: { ...this.state.auth, email: event.target.value } });
  }
  onChangeUpdatePasswordField(event) {
    this.setState({
      auth: { ...this.state.auth, password: event.target.value }
    });
  }
  onChangeUpdateFirstnameField(event) {
    this.setState({
      auth: { ...this.state.auth, firstname: event.target.value }
    });
  }
  onChangeUpdateLastnameField(event) {
    this.setState({
      auth: { ...this.state.auth, lastname: event.target.value }
    });
  }

  handleSubmit(event) {
    console.log(
      "A name was submitted: " + JSON.stringify(this.state.auth, 1, 1)
    );
    event.preventDefault();
    fetch("/auth/signin", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(this.state.auth)
    })
      .then(res => res.json())
      .then(
        res => this.setState({ flash: res.flash }),
        err => this.setState({ flash: err.flash })
      );
  }

  handleClick = () => {
    this.setState({
      open: true
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <div>
        <Row>
          <Link
            to="/signup"
            className="previousPage py-0 px-3 d-inline-block text-white"
          >
            <i className="fas pr-2 fa-angle-left" />
            Go to sign up !
            <Button />
          </Link>
        </Row>
        <form onSubmit={this.handleSubmit}>
          <Row>
            <TextField
              onChange={this.onChangeUpdateEmailField.bind(this)}
              id="standard-email-input"
              label="Email"
              name="email"
              type="email"
              autoComplete="current-email"
              margin="normal"
            />
          </Row>
          <Row>
            <TextField
              onChange={this.onChangeUpdatePasswordField.bind(this)}
              id="standard-password-input"
              label="Password"
              name="password"
              type="password"
              autoComplete="current-password"
              margin="normal"
            />
          </Row>
          <Link to="/profile">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              value="Soumettre"
            >
              <Icon className="fas fa-paper-plane">send</Icon>
            </Button>
          </Link>
          <Snackbar
            open={this.state.open}
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
            ContentProps={{
              "aria-describedby": "message-id"
            }}
            message={<span id="message-id">{this.state.flash}</span>}
          />
        </form>
      </div>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignIn);
