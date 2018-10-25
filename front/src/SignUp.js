import React, { Component } from "react";

class SignUp extends Component {
  render() {
    const { updateField, state, handleSubmit } = { ...this.props };
    return (
      <div>
        <h1>{JSON.stringify(state, 1, 1)}</h1>
        <form onSubmit={event => handleSubmit(event)}>
          <p>
            <input
              onChange={event => updateField(event)}
              type="email"
              name="email"
              placeholder="Votre email"
            />
          </p>
          <p>
            <input
              onChange={event => updateField(event)}
              type="password"
              name="password"
              placeholder="Votre mot de passe"
            />
          </p>
          <p>
            <input
              onChange={event => updateField(event)}
              type="password"
              name="passwordbis"
              placeholder="Retappez votre mot de passe"
            />
          </p>
          <p>
            <input
              onChange={event => updateField(event)}
              type="text"
              name="name"
              placeholder="Votre Nom"
            />
          </p>
          <p>
            <input
              onChange={event => updateField(event)}
              type="text"
              name="firstname"
              placeholder="Votre prénom"
            />
          </p>
          <input type="submit" value="Soumettre" />
        </form>
      </div>
    );
  }
}

export default SignUp;
