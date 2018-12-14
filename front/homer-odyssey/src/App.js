import React, { Component } from "react";
import SignUp from "./SignUp";
import FormUpload from "./FormUpload";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SignUp />
          <FormUpload />
        </header>
      </div>
    );
  }
}

export default App;
