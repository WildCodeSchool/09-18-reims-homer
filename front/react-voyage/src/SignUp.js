import React, { Component, Fragment } from 'react';
import { TextField, Snackbar, Button, IconButton } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"

import "./App.css"

class SignUp extends Component {

  state = {
    open: false,
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
    const { state, handleInputChange, handleSubmit } = { ...this.props }
    return (
      <Fragment>
        <div> Sign Up </div>
        {/* <h1>{JSON.stringify(state, 1, 1)}</h1> */}
        <form onSubmit={((event) => handleSubmit(event))}>
          <TextField label="Email" onChange={((event) => handleInputChange(event))} type="email" name="email" />
          <TextField label="Password" onChange={((event) => handleInputChange(event))} type="password" name="password" />
          <TextField label="Password Bis" onChange={((event) => handleInputChange(event))} type="password" name="passwordbis" />
          <TextField label="Name" onChange={((event) => handleInputChange(event))} type="text" name="name" />
          <TextField label="LastName" onChange={((event) => handleInputChange(event))} type="text" name="lastname" />
          <br />
          <Button onClick={this.handleClick} type="submit" value="Soumettre">Valider</Button>
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
          message={<span id="message-id">{state.flash}</span>}
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