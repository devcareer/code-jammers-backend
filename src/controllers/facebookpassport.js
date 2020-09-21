var passport = require('passport')
var  FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: "723215311598159",
    clientSecret: "",
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    //check user table for anyone with a facebook ID of profile.id
    User.findOne({
        'facebook.id': profile.id 
    }, function(err, user) {
        if (err) {
            return done(err);
        }
        //No user was found... so create a new user with values from Facebook (all the profile. stuff)
        if (!user) {
            user = new User({
                name: profile.displayName,
                email: profile.emails[0].value,
                username: profile.username,
                provider: 'facebook',
                //now in the future searching on User.findOne({'facebook.id': profile.id } will match because of this next line
                facebook: profile._json
            });
            user.save(function(err) {
                if (err) console.log(err);
                return done(err, user);
            });
        } else {
            //found user. Return
            return done(err, user);
        }
    });
}
));