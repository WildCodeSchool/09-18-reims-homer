import React, { Component } from "react";
import "./App.css";
import Email from "./SignUp";
import { Container } from "reactstrap";

class App extends Component {
  render() {
    return (
      <Container>
        <header className="text-center">Homer Odyssey</header>

        <Email />
      </Container>
    );
  }
}

export default App;
