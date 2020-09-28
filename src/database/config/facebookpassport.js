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
},
async (accessToken, refreshToken, profile, cb) => {
  console.log("profile", profile);
  console.log("profile email", profile.emails[0].value);
  console.log("profile photo", profile.photos[0].value);
  console.log("profile displayName", profile.displayName);
  console.log("profile provider", profile.provider);
  try {
    const email = profile.emails ? profile.emails[0].value : null;
    const { id } = profile;
    // check if user already exists our database
    const currentUser = await Users.findOne({
      id,
    });
    console.log("user", currentUser);
    if (currentUser) {
      return cb(null, currentUser);
    }
    const { displayName } = profile;
    const [lastName, firstName] = displayName.split(" ");
    const newUser = {
      first_name: firstName,
      last_name: lastName,
      email,
      id,
      role: "user"
    };
    await createUser(newUser);
    return cb(null, newUser);
  } catch (err) {
    return cb(err, false);
  }
});

export { fbStrategy };
