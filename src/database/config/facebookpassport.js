import passport from "passport";
import dotenv from "dotenv";
import FacebookStrategy from "passport-facebook";
import model from "../../models";

const { Users } = model;

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
    // check if user already exists our database
    const userExist = await Users.findOne({ where: { password: profile.id }, email });
    console.log("user", userExist);
    if (userExist) {
      return done(null, userExist);
    }

    const newUser = await Users.create({
      email,
      username: profile.displayName,
      password: profile.id,
      role: "User",
    });
    return done(null, newUser);
  } catch (err) {
    return done(err, false);
  }
});
export { fbStrategy };
