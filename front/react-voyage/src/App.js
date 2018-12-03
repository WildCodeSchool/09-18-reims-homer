import React, { Component } from 'react';
import './App.css';
import SignUp from "./SignUp"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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



  render() {
    return (
      <div className="App">
        <SignUp state={this.state}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
