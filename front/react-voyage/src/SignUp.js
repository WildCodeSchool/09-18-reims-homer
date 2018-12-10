import React, { Component, Fragment } from 'react';
import { TextField, Snackbar, Button, IconButton } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import { Link } from "react-router-dom"

import "./App.css"

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
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


  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };
  render() {

    return (
      <Fragment>

        <Link to="/signin">Signin</Link>
        <div> Sign Up </div>
        {/* <h1>{JSON.stringify(state, 1, 1)}</h1> */}
        <form onSubmit={((event) => this.handleSubmit(event))}>
          <TextField label="Email" onChange={((event) => this.handleInputChange(event))} type="email" name="email" />
          <TextField label="Password" onChange={((event) => this.handleInputChange(event))} type="password" name="password" />
          <TextField label="Password Bis" onChange={((event) => this.handleInputChange(event))} type="password" name="passwordbis" />
          <TextField label="Name" onChange={((event) => this.handleInputChange(event))} type="text" name="name" />
          <TextField label="LastName" onChange={((event) => this.handleInputChange(event))} type="text" name="lastname" />
          <br />
          <Button onClick={this.handleClick} type="submit" value="Soumettre"><Link to="/">VALIDER</Link></Button>
        </form>

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.state.flash}</span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
              UNDO
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />


      </Fragment>
    );
  }
}

export default SignUp