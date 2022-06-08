require("dotenv");
const express = require("express");
const app = express();

// const mongoose = require("mongoose");

// mongoose
//   .connect(process.env.MONGO)
//   .then(() => console.log("databbase connected!"))
//   .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
  console.log("backend connected!");
});
