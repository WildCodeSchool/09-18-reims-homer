const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "tmp/" });
const fs = require("fs");

router.post("/uploaddufichier", upload.array("monfichier", 5), function(
  req,
  res
) {
  req.files.map(file =>
    fs.rename(file.path, "public/images/" + file.originalname, function(err) {
      if (err) {
        res.status(500).json({ flash: err });
      } else {
        res.status(200).json({ flash: "File has been uploaded !" });
      }
    })
  );
});

module.exports = router;
