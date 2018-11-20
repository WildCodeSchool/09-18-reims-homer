import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Email from "./SignUp";

class App extends Component {
  render() {
    return (
      <div>
        <header>Homer Odyssey</header>
        <Email />
      </div>
    );
  }
}

export default App;
