import React, { Component, Fragment } from 'react';

class SignUp extends Component {


  render() {
    const { state, handleInputChange, handleSubmit } = { ...this.props }
    return (
      <Fragment>
        <div> nouveau composant </div>
        <h1>{JSON.stringify(state, 1, 1)}</h1>
        <form onSubmit={((event) => handleSubmit(event))}>
          <input onChange={((event) => handleInputChange(event))} type="email" name="email" />
          <input onChange={((event) => handleInputChange(event))} type="password" name="password" />
          <input onChange={((event) => handleInputChange(event))} type="password" name="passwordbis" />
          <input onChange={((event) => handleInputChange(event))} type="text" name="name" />
          <input onChange={((event) => handleInputChange(event))} type="text" name="lastname" />
          <input type="submit" value="Soumettre" />
        </form>
        <p>{state.flash}</p>
      </Fragment>
    );
  }
}

export default SignUp