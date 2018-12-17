const bddQuery = require("../function/bddQuery");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
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
    async (email, password, cb) => {
      const userQuery = await bddQuery(
        `SELECT * FROM users WHERE email = ? `,
        email
      );
      const user = userQuery.results[0];

      if (bcrypt.compareSync(password, user.password)) {
        return cb(
          null,
          { id: user.id, email: user.email },
          { message: "Connecté" }
        );
      } else {
        return cb(null, false, { message: "Pseudo ou mot de passe incorrect" });
      }
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
      const user = jwtPayload;
      return cb(null, user);
    }
  )
);
