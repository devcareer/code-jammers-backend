import { Strategy } from "passport-google-oauth20";
import User from "../../services/UserService/User";
import model from "../../models";
import dotenv from "dotenv";

const { Users } = model;

dotenv.config();

const googleStrategy = new Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
  },
  
  async (accessToken, refreshToken, profile, cb) => {
    try {
      const email = profile.emails[0].value;
      const profilePicture =  profile.photos[0].value
    
      const currentUser = await Users.findOne({
        googleId: profile.id
      })
      console.log("user",currentUser);
  
      if (currentUser) {
        return cb(null,currentUser);
      }

      const newUser = {
        username: profile.name.givenName,
        lastName:  profile.name.familyName,
        profilePicture,
        password: "",
        email,
        googleId: profile.id,
        provider: "google",
        role: 'User'
      };
 
     await User.createUser(newUser);
      return cb(null, newUser);
    } catch (err) {
      return cb(err, false);
    }
  });
  
  export { googleStrategy };