const passport = require("passport");
const connection = require("../../helpers/db.js");
const LocalStrategy = require("passport-local").Strategy;
var bcrypt = require("bcrypt");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      session: false
    },
    function(email, password, cb) {
      connection.query(
        `SELECT * FROM users WHERE email = '${email}'`,
        (err, user) => {
          // si une erreur est obtenue

          if (!bcrypt.compareSync(password, user[0].password)) {
            return cb(null, false, { message: "Incorrect email ou password." });
          }
          // si l'utilisateur est ok on retourne l'objet user
          else {
            return cb(null, { id: user[0].id, email: user[0].email });
          }
        }
      );
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "your_jwt_secret"
    },
    function(jwtPayload, cb) {
      return cb(null, jwtPayload);
    }
  )
);
