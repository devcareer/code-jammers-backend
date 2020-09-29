import { Strategy } from "passport-google-oauth20";
import { createUser } from "../../UserService/User";
import model from "../../models";
import dotenv from 'dotenv';

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
      const provider = profile.provider
      
      const { googleId: id } = profile
      // check if user already exists our database
      const currentUser = await Users.findOne({
        where: {
          id
        }
        
      })
      console.log("user",currentUser);
  
      if (currentUser) {
        return cb(null,currentUser);
      }

      const newUser = {
        userame: profile.name.givenName,
        lastName:  profile.name.familyName,
        profilePicture,
        email,
        id,
        provider,
        role: 'user'
      };
      // store in database
      await createUser(newUser);
  
      return cb(null, newUser);
    } catch (err) {
      return cb(err, false);
    }
  });
  
  export { googleStrategy };