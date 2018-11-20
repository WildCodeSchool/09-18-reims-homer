import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
    
  }

  onChangeUpdateEmailField(event){
      this.setState({email: event.target.value})
  }

  render() {
    return (
      <div>
        <h1>{this.state.email}</h1>
        <input onChange={this.onChangeUpdateEmailField.bind(this)} type="email" name="email" />
      </div>
    );
  }
}

export default SignUp;
