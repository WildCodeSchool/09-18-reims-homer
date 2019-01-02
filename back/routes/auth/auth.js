const express = require("express");
const router = express.Router();
const connection = require("../../helpers/db.js");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const jwt = require("jsonwebtoken");
require("../../strategy");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post("/signup", function(req, res) {
  const post = req.body;
  // let salt = bcrypt.genSaltSync(10);
  // let hash = bcrypt.hashSync(post.password, salt);
  post.password = bcrypt.hashSync(post.password, bcrypt.genSaltSync(8));
  connection.query("INSERT INTO users SET ?", post, err => {
    if (err) res.status(500).json({ flash: err.message });
    else res.status(200).json({ flash: "User has been signed up !" });
  });
});

router.post("/signin", function(req, res) {
  passport.authenticate("local", (err, user, info) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(400).json({ message: info.message });
    const token = jwt.sign(user, "your_jwt_secret");
    return res.json({ user, token });
  })(req, res);
});

module.exports = router;
