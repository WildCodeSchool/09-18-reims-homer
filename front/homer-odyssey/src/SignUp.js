import React from "react";

const SignUp = ({ email, updateEmailField }) => (
  <div>
    <h1>{email}</h1>
    <input type="email" name="email" onChange={updateEmailField} />
  </div>
);

export default SignUp;
