require("dotenv").config();
const express = require("express");

const app = express();
// app.use(express.static("public"));

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const hotelRoute = require("./routes/hotel");
const roomRoute = require("./routes/room");

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("databbase connected!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello!!");
});

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/hotels", hotelRoute);
app.use("/rooms", roomRoute);

app.listen(process.env.PORT, () => {
  console.log("backend connected!");
});
