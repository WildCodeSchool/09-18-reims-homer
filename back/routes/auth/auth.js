const express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt")
const passport = require('passport')
const jwt = require('jsonwebtoken')
require("../../passport-stategy")

const connection = require("../../helpers/sql.js")

router.post('/signup', function (req, res, next) {
  let hash = bcrypt.hashSync(req.body.password, 10)
  connection.query("INSERT INTO users(email, password, name, lastname) VALUES(?,?,?,?)", [req.body.email, hash, req.body.name, req.body.lastname], function (error, results, fields) {
    if (error) {
      res.status(500).json({ flash: error.message });
    }
    res.status(200).json({ flash: "User has been signed up !" })

  })
})

router.post('/signin', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).send(err)
    }
    if (!user) {
      return res.status(400).json({ message: info.message })
    }
    const token = jwt.sign(user, 'your_jwt_secret')
    return res.json({ user, token })
  })(req, res)
})

module.exports = router;