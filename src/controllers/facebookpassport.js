passport.use(
  "facebook", new FacebookStrategy({
    clientID: process.env.TALK_FACEBOOK_APP_ID,
    clientSecret: process.env.TALK_FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    // passReqToCallback: true,
    // profileFields: ["id", "displayName", "email"],
  },
  async (accessToken, refreshToken, profile, done) => {
    let user;
    try {
      console.log("profile", profile);
      console.log("accessToken", accessToken);
      console.log("refreshToken", refreshToken);

      /* const { id, provider, displayName } = profile;

      user = await UsersService.upsertSocialUser(
        req.context,
        id,
        provider,
        displayName
      ); */
    } catch (err) {
      return done(err);
    }

    return ValidateUserLogin(profile, user, done);
  })
);
