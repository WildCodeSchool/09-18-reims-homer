const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "tmp/" });
const fs = require("fs");

const maxSize = 3000000;

router.post("/uploaddufichier", upload.array("monfichier", 5), function(
  req,
  res
) {
  req.files.map(file => {
    if (file.size < maxSize && file.mimetype === "image/png") {
      fs.rename(file.path, "public/images/" + file.originalname, function(err) {
        if (err) {
          res.status(500).json({ flash: err });
        } else {
          res.status(200).json({ flash: "File has been uploaded !" });
        }
      });
    } else if (file.size > maxSize) {
      res.status(413);
    } else if (file.mimetype !== "image/png") {
      res.status(422);
    }
  });
});

module.exports = router;
