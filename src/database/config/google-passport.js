import { Strategy } from "passport-google-oauth20";
import User from "../../services/UserService/User";
import model from "../../models";
import dotenv from "dotenv";

const { Users } = model;

dotenv.config();

const googleStrategy = new Strategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_HEROKU_URL,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
  },

  async (accessToken, refreshToken, profile, done) => {
    try {
      const userExist = await Users.findOne({
        googleId: profile.id,
      });

      if (userExist) {
        return done(null, userExist);
      }

      const newUser = await User.createUser({
        username: profile.name.givenName,
        lastName: profile.name.familyName,
        profilePicture: profile.photos[0].value,
        password: "",
        email: profile.emails[0].value,
        googleId: profile.id,
        provider: "google",
        role: "User",
        verified: true,
      });
      return done(null, newUser);
    } catch (err) {
      return done(err, false);
    }
  }
);

export { googleStrategy };
