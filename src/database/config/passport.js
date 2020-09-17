// import { Strategy } from "passport-google-oauth2"
import passport from "passport"
// var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

import { createUser, findUserById } from "../../UserService/User"
import dotenv from 'dotenv'

dotenv.config()

// passport.use(new GoogleStrategy( {
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret:process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL:process.env.GOOGLE_CALLBACK_URL,
//      passReqToCallback   : true
// }, async function(accessToken, refreshToken, profile, done){

// } ) ) 
const googleStrategy = new Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:process.env.GOOGLE_CALLBACK_URL,
     passReqToCallback   : true
}) 
async (accessToken, refreshToken, profile, cb) => {
    console.log("profile", profile);
    // try {
        
    //     const email = profile.email[0].value;
    //     const { id } = profile

    //     //Check if user already exists in DB with the given profileID
    //     const currentUser = await findUserById(id)

    //     if (currentUser) {
    //         return cb(null, currentUser)
    //     } else {
    //         //Create a new user
    //         const newUser = {

    //         }
    //     }

    // } catch (error) {
    //     console.log("google oauth error", error);
    // }
}

export default googleStrategy 