const express = require("express");
const router = express.Router();
const connection = require("../../helpers/db");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post("/signup", (req, res, next) => {
  const dataFrom = req.body;
  console.log(dataFrom);
  connection.query("INSERT INTO users SET ?", dataFrom, err => {
    if (err) {
      console.log("erreur bdd");
    } else {
      res.send("I am in POST signup");
    }
  });
});

module.exports = router;
