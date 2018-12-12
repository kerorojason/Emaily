const express = require("express"); //common js module good for nodejs
// import express form 'express'; //es2015 module for react
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);
const app = express();

app.use(
  cookieSession({
    // extract data from cookie and assign to req.session property
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// const authRoutes = require("./routes/authRoutes"); // Unnecessary
require("./routes/authRoutes")(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);
