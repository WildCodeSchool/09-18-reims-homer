const express = require("express");
const router = express.Router();
const connection = require("../../helpers/db.js");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post("/signup", function(req, res) {
  const post = req.body;
  connection.query("INSERT INTO users SET ?", post, err => {
    if (err) res.status(500).json({ flash: err.message });
    else res.status(200).json({ flash: "User has been signed up !" });
  });
});

module.exports = router;
