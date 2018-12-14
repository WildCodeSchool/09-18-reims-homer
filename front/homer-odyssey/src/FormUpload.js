import React, { Component } from "react";

class FormUpload extends Component {
  render() {
    return (
      <form
        method="POST"
        encType="multipart/form-data"
        action="uploaddufichier"
      >
        <input type="file" name="monfichier" />
        <button> envoyer </button>
      </form>
    );
  }
};

export default FormUpload;
