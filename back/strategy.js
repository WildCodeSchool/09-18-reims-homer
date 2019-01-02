const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const connection = require("./helpers/db");
const bcrypt = require("bcryptjs");
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
        `SELECT * FROM users WHERE '${email}' = email`,
        (err, user) => {
          if (err) {
            return cb(err);
          } else if (bcrypt.compareSync(password, user[0].password)) {
            return cb(null, {
              id: user[0].id,
              email: user[0].email,
              name: user[0].name,
              lastname: user[0].lastname
            });
          } else {
            return cb(null, false, {
              message: "Email ou mot de passe incorrect."
            });
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

module.exports = passport;
