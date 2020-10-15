/*
import passport from "passport";
import dotenv from "dotenv";
import FacebookStrategy from "passport-facebook";
import { Users } from "../../../models";

dotenv.config();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

if (process.env.NODE_ENV === "test") {
  Strategy = require("passport-mock").Strategy;
} else {
  Strategy = require("passport-facebook").Strategy;
}

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
    const userExist = await Users.findOne({ where: { facebookId: profile.id } });
    const emailExist = await Users.findOne({ where: { email: profile.emails[0].value } });

    console.log(userExist);

    if (userExist) {
      return done(null, userExist);
    }
    if (emailExist) {
      console.log("Email already exist, please sign in with your email and password");
      return done(null, "Email already exist, please sign in with your email and password");
    }
    const newUser = {
      email,
      username,
      facebookId: profile.id,
      password: "",
      role: "User",
    };
    await Users.create(newUser);
    console.log(newUser);
    return done(null, newUser);
  } catch (err) {
    return done(err, false);
  }
});

export { fbStrategy }; */
