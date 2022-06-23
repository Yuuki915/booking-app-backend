require("dotenv").config();
const express = require("express");
const app = express();
// app.use(express.static("public"));
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const hotelRoute = require("./routes/hotels");
const roomRoute = require("./routes/rooms");

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("databbase connected!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello!!");
});

app.use((req, res, next) => {
  next();
});
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/hotels", hotelRoute);
app.use("/rooms", roomRoute);

app.listen(process.env.PORT, () => {
  console.log("backend connected!");
});
