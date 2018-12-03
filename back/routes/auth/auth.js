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
      res.status(500).json({ flash: err.message });
    } else {
      res.status(200).json({ flash: "User has been signed up !" });
    }
  });
});

module.exports = router;
