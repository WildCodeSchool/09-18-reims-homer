import React, { Component } from "react";
import SignUp from "./SignUp";

import "./App.css";

class App extends Component {
  constructor() {
    super();
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
        <SignUp
          updateEmailField={this.updateEmailField}
          email={this.state.email}
        />
      </div>
    );
  }
}

export default App;
