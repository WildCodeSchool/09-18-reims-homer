var express = require("express");
var router = express.Router();
const connection = require("../../helpers/db.js");
const bodyParser = require("body-parser");
var bcrypt = require("bcrypt");
const passport = require("passport");
const jwt = require("jsonwebtoken");
require("./localStrategy");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post("/signup", function(req, res) {
  const formData = req.body;
  let hashPassword = bcrypt.hashSync(formData.password, 10);
  formData.password = hashPassword;
  connection.query("INSERT INTO users SET ?", formData, err => {
    if (err) res.status(500).json({ flash: err.message });
    else res.status(200).json({ flash: "User has been signed up !" });
  });
});

router.post("/signin", function(req, res) {
  passport.authenticate("local", (err, user, info) => {
    console.log(user);
    if (err) {
      return res.status(500).send(err);
    }
    if (!user) {
      return res.status(400).json({ message: info.message });
    }
    const token = jwt.sign(user, "your_jwt_secret");
    return res.json({ user, token });
  })(req, res);
});

module.exports = router;
