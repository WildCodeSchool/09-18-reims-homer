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
      lastname: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(this.state, 1, 1))
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
