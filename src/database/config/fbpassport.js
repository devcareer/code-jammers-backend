import passport from "passport";
import dotenv from "dotenv";
import FacebookStrategy from "passport-facebook";
import database from "../../models";
import User from "../../services/UserService/User";

dotenv.config();

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
const fbStrategy = new FacebookStrategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: process.env.FACEBOOK_CALLBACK_URL,
  profileFields: ["id", "name", "email", "displayName"]
},
async (accessToken, refreshToken, profile, done) => {
  try {
    const username = (profile.displayName).toLowerCase();
    const email = profile.emails[0].value;
    // check if user already exists in our database
    const userExist = await database.Users.findOne({ where: { facebookId: profile.id } });
    if (userExist) {
      return done(null, userExist);
    }
    const emailExist = await database.Users.findOne({ where: { email } });

    if (emailExist) {
      return done(null, "Email already exist, please sign in with your email and password");
    }
    if (!userExist) {
      const newUser = {
        email,
        username,
        facebookId: profile.id,
        password: "",
        role: "User",
      };
      await User.createUser(newUser);
      return done(null, newUser);
    }
  } catch (err) {
    return done(err, false);
  }
});

export { fbStrategy };
