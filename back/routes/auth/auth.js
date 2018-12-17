const express = require("express");
const router = express.Router();
const connection = require("../../helpers/db");

router.post("/signup", function(req, res, next) {
  connection.query("INSERT INTO users SET ?", req.body, (error, results) => {
    if (error)
      res
        .status(500)
        .json({ flash: "Adresse mail déjà utilisée !", type: "error" });
    else
      res.status(200).json({ flash: "Inscription réussie !", type: "success" });
  });
});

router.post("/signin", (req, res, next) => {
  const data = req.body;
  console.log(data);
  connection.query(
    `SELECT * FROM users WHERE email = ? AND password = 
     ?`,
    [data.email, data.password],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          flash: "Adresse mail ou mot de passe incorrect",
          type: "error"
        });
      } else {
        res.status(200).json({ flash: "Connection réussie", type: "success" });
      }
    }
  );
});

module.exports = router;
