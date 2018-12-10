var express = require("express");
var router = express.Router();
const connection = require("../../helpers/db.js");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post("/signup", function(req, res, next) {
  const formData = req.body;
  connection.query("INSERT INTO users SET ?", formData, err => {
    if (err) res.status(500).json({ flash: err.message });
    else res.status(200).json({ flash: "User has been signed up !" });
  });
});

module.exports = router;
