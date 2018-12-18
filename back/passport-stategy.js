const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const connection = require("./helpers/sql.js")
const bcrypt = require('bcrypt')
const passportJWT = require("passport-jwt")
const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    session: false
  },
  function (email, password, cb) {
    connection.query('SELECT * FROM users WHERE email = ?', email, (err, result) => {
      let error = false;
      if (!result[0]) {
        error = true;
      } else {

        let hash = result[0].password
        if (!bcrypt.compareSync(password, hash)) {

          error = true;
        }
      }

      if (err) {
        return cb(err)
      } else if (error) {
        return cb(null, false, { message: "Mauvais mot de passe" })
      } else {
        return cb(null, email)
      }
    })
  }
))

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'your_jwt_secret'
    },
    function (jwtPayload, cb) {
      return cb(null, jwtPayload);
    }
  )
);
