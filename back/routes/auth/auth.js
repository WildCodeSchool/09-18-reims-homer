const express = require("express");
const router = express.Router();
const connection = require("../../helpers/db");

const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/signup", (req, res, next) => {
  const formData = req.body;
  console.log(formData);
  connection.query("INSERT INTO users SET ?", formData, (err, results) => {
    if (err) {
      res.status(500).json({ flash: err.message });
    } else {
      res.status(200).json({ flash: "User has been signed up !" });
    }
  });
});

module.exports = router;
