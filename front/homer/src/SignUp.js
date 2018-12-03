import React from "react";

class SignUp extends React.Component {
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
        {" "}
        <h1>test@test.com</h1>
        <input type="email" name="email" onChange={this.updateEmailField} />
      </div>
    );
  }
}

export default SignUp;
