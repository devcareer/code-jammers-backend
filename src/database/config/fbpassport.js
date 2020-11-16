import dotenv from "dotenv";
import FacebookStrategy from "passport-facebook";
import model from "../../models";
import User from "../../services/UserService/User";

const { Users } = model;
dotenv.config();

const fbStrategy = new FacebookStrategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: process.env.FACEBOOK_CALLBACK_URL,
  profileFields: ["id", "name", "email", "displayName"]
},

async (accessToken, refreshToken, profile, done) => {
  try {
    const userExist = await Users.findOne(
      { where: { facebookId: profile.id } }
    );
    if (userExist) {
      const msgObj = { status: 409, error: "User already exist" };
      return done(null, msgObj);
    }
    const emailExist = await Users.findOne({ where: { email } });
    if (emailExist) {
      const msgObj = ({ status: 404, error: "Email already used by another user." });
      return done(null, msgObj);
    }

    if (!userExist) {
      const newUser = {
        email: profile.emails[0].value,
        username: (profile.displayName).toLowerCase(),
        facebookId: profile.id,
        password: "",
        role: "User",
        verified: "true"
      };
      await User.createUser(newUser);
      return done(null, newUser);
    }
  } catch (err) {
    return done(err, false);
  }
});

export { fbStrategy };
