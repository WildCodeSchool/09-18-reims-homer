import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import { Link, withRouter } from "react-router-dom";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstname: "",
      lastname: "",
      password: "",
      flash: "",
      openFlash: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateFormField = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();

    fetch("/auth/signin", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(res =>
        this.setState({ flash: res.flash, open: true }, () => {
          if (res.type === "success") {
            this.props.history.push("profile");
          }
        })
      );
  }

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    return (
      <form>
        <p>Connexion</p>
        <TextField
          value={this.state.email}
          type="email"
          name="email"
          placeholder="Your email"
          onChange={event => this.updateFormField(event)}
        />

        <TextField
          type="password"
          name="password"
          placeholder="Your password"
          value={this.state.password}
          onChange={this.updateFormField}
        />
        <hr />
        <Button
          color="primary"
          variant="contained"
          type="submit"
          value="Soumettre"
          onClick={e => this.handleSubmit(e)}
        >
          Soumettre
        </Button>

        <hr />
        <Link to="/signup">
          <Button>Inscris toi !</Button>
        </Link>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.state.open}
          autoHideDuration={3000}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">{this.state.flash}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </form>
    );
  }
}

export default withRouter(SignIn);
