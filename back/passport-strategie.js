const bcrypt = require("bcrypt");
const connection = require("./helpers/db.js");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      session: false
    },
    function(email, password, cb) {
      console.log("email", email);
      connection.query(
        `SELECT * FROM users WHERE email = ?`,
        email,
        (err, result) => {
          if (err) {
            return cb(null, false, {
              message: "E-mail ou mot de passe incorrects."
            });
          }
          if (bcrypt.compareSync(password, result[0].password)) {
            return cb(null, { id: result[0].id, email: result[0].email });
          }
        }
      );
    }
  )
);
