const express = require("express");
const router = express.Router();
const connection = require("../../helpers/db");
const bodyParser = require("body-parser");
const passport = require("passport");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post("/signup", (req, res) => {
  const dataForm = req.body;
  const hash_password = bcrypt.hashSync(dataForm.password, 10);
  dataForm = hash_password;
  console.log(dataForm);
  connection.query("INSERT INTO users SET ?", dataForm, err => {
    if (err) {
      res
        .status(500)
        .json({ flash: "Problem during registration !", type: "error" });
    } else {
      res
        .status(200)
        .json({ flash: "User has been signed up !", type: "success" });
    }
  });
});

router.post("/signin", (req, res) => {
  passport.authenticate("local", (err, user, info) => {
    console.log(user);
    if (err) {
      return res.status(500).send(err);
    }
    if (!user) {
      return res.status(400).json({ message: "error" });
    }

    const token = jwt.sign(user, "your_jwt_secret");
    return res.json({ user, token });
  })(req, res);
});

module.exports = router;
