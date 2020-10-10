import passport from "passport";
import dotenv from "dotenv";
import FacebookStrategy from "passport-facebook";
import { Users } from "../../models";

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
    const username = (profile.displayName).toLowerCase();
    const email = profile.emails[0].value;
    // check if user already exists in our database
    const userExist = await Users.findOne({ where: { facebookId: profile.password } });
    console.log("user", userExist, profile.id);

    if (userExist) {
      return done(null, userExist);
    }
    console.log("inva");
    console.log("userExist");
    const newUser = {
      email,
      username,
      password: facebookId,
      role: "User",
    };
    await Users.create(newUser);
    return done(null, newUser);
  } catch (err) {
    return done(err, false);
  }
});

export { fbStrategy };
