var express = require("express");
var router = express.Router();
const connection = require("../../helpers/db.js");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post("/signup", function(req, res, next) {
  const formData = req.body;
  console.log(formData);
  connection.query("INSERT INTO users SET ?", formData, err => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la création d'un utilisateur");
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
