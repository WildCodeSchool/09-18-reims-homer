import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Link, withRouter } from "react-router-dom";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  container: {
    display: "flex"
  }
});

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      auth: {
        email: "",
        password: ""
      },
      flash: "",
      open: false
    };
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  updateField(event) {
    this.setState({
      auth: { ...this.state.auth, [event.target.name]: event.target.value }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("/auth/signin", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(this.state.auth)
    })
      .then(res => res.json())
      .then(res =>
        this.setState({ flash: res.flash, open: true }, () => {
          if (res.type === "success") {
            this.props.history.push("/profile");
          }
        })
      );
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <form className={styles.container}>
          <Link to="/signup">
            <h1>To Sign up !</h1>
          </Link>
          <TextField
            onChange={this.updateField}
            type="email"
            name="email"
            placeholder="Email"
            label="Email"
            required
          />
          <br />
          <TextField
            onChange={this.updateField}
            type="password"
            placeholder="Password"
            label="Password"
            name="password"
            required
          />
          <br />
          <Link to="/profile">
            <Button
              variant="contained"
              color="primary"
              className={styles.button}
              type="submit"
              style={{ marginTop: 20 }}
            >
              Send
              <Icon className={styles.rightIcon}>send</Icon>
            </Button>
          </Link>
        </form>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          open={this.state.open}
          autoHideDuration={6000}
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
      </div>
    );
  }
}

export default withRouter(SignIn);
