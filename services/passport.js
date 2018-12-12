const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

// 用以下方式import user model, 避免testing時有import多次的error
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser);
          // we already have a record withthe given profile ID
        } else {
          // null (existingUser和下面宣告皆為mongoose model instance)
          // we don't have a user record with this ID, make a new record!
          new User({ googleId: profile.id }).save().then(user => done(null, user));
        }
      });
    }
  )
);
