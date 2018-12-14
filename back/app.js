require("dotenv").config();
const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const authRouter = require("./routes/auth/auth");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "tmp/" });
const fs = require("fs");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("youhou");
});

app.post("/uploaddufichier", upload.single("monfichier"), function(
  req,
  res,
  next
) {
  console.log("req.file.path :", req.file.path);
  console.log("req.file.originalname :", req.file.originalname);
  fs.rename(req.file.path, "Public/images/" + req.file.originalname, function(
    err
  ) {
    if (err) {
      res.send(err);
    } else {
      res.send("Fichier uploadé avec succès");
    }
  });
});

app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

let server = app.listen(process.env.PORT || 5000, function() {
  console.log("Listening on port " + server.address().port);
});
