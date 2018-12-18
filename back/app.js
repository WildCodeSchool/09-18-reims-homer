const http = require('http');
const path = require('path');
const express = require("express");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const authRouter = require("./routes/auth/auth")
const passport = require("passport")
require('./passport-stategy')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));


app.use('/auth', authRouter); // où authRouter est issu de l'importation
// j'implémente la partie API

app.get('/profile', passport.authenticate('jwt', { session: false }), function (req, res) {
  res.send(req.user);
})

app.get("/", (req, res) => {
  res.send("Youhou");
})

/// dans le cas d'une route non trouvée, je retourne le code 404 'Not Found'
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err)
})

// Je lance le serveur node
let server = app.listen(process.env.PORT || 5000, function () {
  console.log('Listening on port' + server.address().port)
})
