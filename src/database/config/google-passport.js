import { Strategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import User from "../../services/UserService/User";
import model from "../../models";

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
        where: {
          googleId: profile.id,
        },
      });

      if (userExist) {
        const msgObj = { status: 409, error: "User already exist" };
        return done(null, msgObj);
      }

      const newUserDetail = await User.createUser({
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
      return done(null, newUserDetail);
    } catch (err) {
      return done(err, false);
    }
  }
);

export { googleStrategy };
