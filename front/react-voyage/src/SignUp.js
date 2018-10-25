import React, { Component, Fragment } from 'react';

class SignUp extends Component {

  render() {
    const { email, handleInputChange } = { ...this.props }
    return (
      <Fragment>
        <div> nouveau composant </div>
        <h1>{email}</h1>
        <input onChange={((event) => handleInputChange(event))} type="email" name="email" />
      </Fragment>
    );
  }
}

export default SignUp