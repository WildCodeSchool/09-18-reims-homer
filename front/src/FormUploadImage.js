import React, { Component } from "react";

export class FormUploadImage extends Component {
  render() {
    return (
      <form action="/monupload" method="POST" enctype="multipart/form-data">
        <input type="file" name="newFile" accept="image/png" multiple />
        <button>Upload</button>
      </form>
    );
  }
}

export default FormUploadImage;
