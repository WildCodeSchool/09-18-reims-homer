// je déclare l'ensemble des librairies nécessaires
const http = require("http");
const path = require("path");
const cors = require("cors");
const passport = require("passport");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();
const multer = require("multer");
const upload = multer({ dest: "tmp/" });
const fs = require("fs");
app.use(cors());

app.post("/uploaddufichier", upload.array("monfichier", 3), function(
  req,
  res,
  next
) {
  let Rapport = "";

  req.files.map(file =>
    file.size < 3000000 && file.mimetype === "image/png"
      ? fs.rename(file.path, "public/images/" + file.originalname, function(
          err
        ) {
          if (err) {
            Rapport += `Problème lors du déplacement de ${file.originalname}`;
          } else {
            Rapport += `${file.originalname} bien uploadé`;
          }
        })
      : (Rapport += `Mauvais format de fichier pour ${file.originalname}`)
  );
  res.send(Rapport);
});

const authRouter = require("./routes/auth/auth");

app.use("/auth", authRouter); //où authRouter est issu de l'importation
app.get("/profile", passport.authenticate("jwt", { session: false }), function(
  req,
  res
) {
  res.send(req.user);
});

// je configure l'application
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

// j'implémente la partie API
app.get("/", (req, res) => {
  res.send("youhou");
});
/// dans le cas d'une route non trouvée, je retourne le code 404 'Not Found'
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

//je lance le serveur node
let server = app.listen(process.env.PORT || 5000, function() {
  console.log("Listening on port " + server.address().port);
});
