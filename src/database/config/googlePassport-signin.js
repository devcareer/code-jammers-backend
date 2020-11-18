import { Strategy } from "passport-google-oauth20";
import model from "../../models";
import dotenv from "dotenv";
import jwtHelper from "../../utilities/Jwt";

const { generateToken } = jwtHelper;
const { Users } = model;

dotenv.config();

const googleStrategySignIn = new Strategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_HEROKU_URL_SIGNIN,
    callbackURL: process.env.GOOGLE_CALLBACK_URL_SIGNIN,
  },

  async (accessToken, refreshToken, profile, done) => {
    try {
      const userExist = await Users.findOne({
        where: {
          googleId: profile.id,
        },
      });

      if (userExist) {
        const token = await generateToken({ userExist });
        const msgObj = { status: 200, message: "User Logged in!", token };
        return done(null, msgObj);
      }
      const error = { status: 404, error: "User with this account does not exist." }
      return done(null, error);
    } catch (err) {
      return done(err, false);
    }
  }
);

export { googleStrategySignIn };
