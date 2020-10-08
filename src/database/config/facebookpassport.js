import passport from "passport";
import dotenv from "dotenv";
import FacebookStrategy from "passport-facebook";
import { Users } from "../../models";
import User from "../../services/UserService/User";

dotenv.config();

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

const fbStrategy = new FacebookStrategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: process.env.FACEBOOK_CALLBACK_URL,
  profileFields: ["id", "name", "email", "displayName"]
},
async (accessToken, refreshToken, profile, done) => {
  console.log("profile", profile);
  try {
    const email = profile.emails[0].value;
    // check if user already exists in our database
    const userExist = await Users.findOne({ facebookId: profile.id });
    if (!userExist) {
      const newUser = {
        email,
        username: profile.displayName,
        password: "facebook",
        role: "User",
        facebookId: profile.id,
        provider: "facebook",

      };
      await User.createUser(newUser);
      return done(null, newUser);
    }

    return done(null, userExist);
  } catch (err) {
    return done(err, false);
  }
});

export { fbStrategy };
