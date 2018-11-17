import React, { Component } from "react";
import SignUp from "./SignUp";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
    this.updateEmailField = this.updateEmailField.bind(this);
  }
  updateEmailField(event) {
    this.setState({ email: event.target.value });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SignUp
            email={this.state.email}
            updateEmailField={this.updateEmailField}
          />
        </header>
      </div>
    );
  }
}

export default App;
