const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  // email: { type: String, required: true },
  password: String,
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
