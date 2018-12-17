const express = require("express");
const router = express.Router();
require("../../passport-strategie");
const connection = require("../../helpers/db.js");
const passport = require("passport");
const bcrypt = require("bcrypt");
router.post("/signup", function(req, res, next) {
  const formData = req.body;
  const hash = bcrypt.hashSync(req.body.password, 10);
  formData.password = hash;
  connection.query("INSERT INTO users SET ?", [formData], (err, results) => {
    if (err) res.status(500).json({ flash: err.message });
    else res.status(200).json({ flash: "User has been signed up !" });
  });
});

router.post("/signin", function(req, res, next) {
  passport.authenticate("local", (err, user, info) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(400).json({ message: info.message });
    return res.json({ user });
  })(req, res);
});

module.exports = router;
