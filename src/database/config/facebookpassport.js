import passport from "passport";
import dotenv from "dotenv";
import strategy from "passport-facebook";
import model from "../../models";

const { Users } = model;

const FacebookStrategy = strategy.Strategy;

dotenv.config();
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(
  new FacebookStrategy(
    {
      clientID: "723215311598159",
      clientSecret: "5c6f878bf5163c5915c137feaf5c221e",
      callbackURL: "http://localhost:3000/auth/facebook/callback",
      profileFields: ["email", "name"]
    },
    ((accessToken, refreshToken, profile, done) => {
      const { email, firstName, lastName } = profile.json;
      const userData = {
        email,
        firstName,
        lastName
      };
      done(null, profile);
    })
  )
);
export { FacebookStrategy };
