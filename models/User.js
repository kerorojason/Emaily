const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
const { Schema } = mongoose;

// mongoose wants to know ahead all the different properties
const userSchema = new Schema({
  googleId: String
});

mongoose.model("users", userSchema);
