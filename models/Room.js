const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({});

roomSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Room", roomSchema);
