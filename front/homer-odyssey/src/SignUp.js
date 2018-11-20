import React, { Component } from "react";

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };

    this.updateEmailField = this.updateEmailField.bind(this);
  }

  updateEmailField = event => {
    this.setState({ email: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>{this.state.email}</h1>
        <input type="email" name="email" onChange={this.updateEmailField} />
      </div>
    );
  }
}

export default Email;
