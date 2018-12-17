const express = require("express");
const router = express.Router();
const connection = require("../../helpers/db");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post("/signup", (req, res, next) => {
  const dataForm = req.body;
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

router.post("/signin", (req, res, next) => {
  const dataForm = req.body;
  console.log(dataForm);
  connection.query(
    `SELECT * FROM users WHERE email = ? AND password = 
     ?`,
    [dataForm.email, dataForm.password],
    (err, results) => {
      if (!results[0]) {
        console.log(err);
        res
          .status(500)
          .json({ flash: "Problem during sign in !", type: "error" });
      } else {
        res
          .status(200)
          .json({ flash: "User has been signed in !", type: "success" });
      }
    }
  );
});

module.exports = router;
