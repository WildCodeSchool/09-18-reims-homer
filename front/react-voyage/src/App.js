import React, { Component } from 'react';
import './App.css';
import SignUp from "./SignUp"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "test@test.com"
    };
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleInputChange = (event) => {
    this.setState({ email: event.target.value })
  };



  render() {
    return (
      <div className="App">
        <SignUp email={this.state.email} handleInputChange={this.handleInputChange} />
      </div>
    );
  }
}

export default App;
