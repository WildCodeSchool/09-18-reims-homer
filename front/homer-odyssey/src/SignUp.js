import React, { Component } from "react";
import {} from "reactstrap";

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      firstname: "",
      lastname: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateFormField = event => {
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.password === this.state.confirmPassword) {
      console.log(JSON.stringify(this.state));
    } else {
      alert("Passwords don't match!!!!!");
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          email :{" "}
          <input
            value={this.state.email}
            type="email"
            name="email"
            onChange={event => this.updateFormField(event)}
          />
          <br />
          password :{" "}
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={event => this.updateFormField(event)}
          />
          <br />
          confirm password :{" "}
          <input
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={event => this.updateFormField(event)}
          />
          <br />
          firstname :{" "}
          <input
            type="firstname"
            name="firstname"
            value={this.state.firstname}
            onChange={event => this.updateFormField(event)}
          />
          <br />
          lastname :{" "}
          <input
            type="lastname"
            name="lastname"
            value={this.state.lastname}
            onChange={event => this.updateFormField(event)}
          />
          <br />
          <input type="submit" value="Soumettre" />
          <br />
          <h1 className="text-center">{JSON.stringify(this.state, 1, 1)}</h1>
        </form>
      </div>
    );
  }
}

export default Email;
