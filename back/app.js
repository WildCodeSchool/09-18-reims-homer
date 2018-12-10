// je déclare l'ensemble des librairies nécessaires
const http = require("http");
const path = require("path");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const authRouter = require("./routes/auth/auth");

// je configure l'application
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

app.use(cors());

app.use("/auth", authRouter);

const multer = require("multer");
const upload = multer({
  fileFilter: function(req, file, cb) {
    if (file.mimetype !== "image/png") {
      return cb(null, false);
    } else {
      cb(null, true);
    }
  },
  limits: { fileSize: 3 * 1024 * 1024 },
  dest: "tmp/"
});

const fs = require("fs");

app.post("/monupload", upload.array("newFile", 3), function(req, res) {
  const result = [];
  req.files.map((file, index) => {
    fs.rename(
      file.path,
      "public/images/" + Date.now() + file.originalname,
      function(err) {
        if (err) {
          console.log(err);
          res.send("problème durant le déplacement");
        } else {
          res.send("Fichier uploadé avec succès");
        }
      }
    );
  });
});

// j'implémente la partie API
app.get("/", (req, res) => {
  res.send("youhou");
});

/// dans le cas d'une route non trouvée, je retourne le code 404 'Not Found'
app.use((req, res, next) => {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

//je lance le serveur node
let server = app.listen(process.env.PORT || 5000, () => {
  console.log("Listening on port " + server.address().port);
});
