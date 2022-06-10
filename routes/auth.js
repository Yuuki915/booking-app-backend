const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hey");
});
router.get("/login", (req, res) => {
  res.send("login");
});

// const router = require("express").Router();
// const passport = require("passport");

// const User = require("../models/User");
// passport.use(User.createStrategy());
// passport.serializeUser(function (user, done) {
//     done(null, user.id);
//   });
//   passport.deserializeUser(function (id, done) {
//     User.findById(id, function (err, user) {
//       done(err, user);
//     });
//   });

// router.get("/login", (req, res) => {
//   res.send("login");
// });

module.exports = router;
