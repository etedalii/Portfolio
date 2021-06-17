// File name: app.js
//   Author's name: Mohammad Etedali - 301056465
//   Website address: https://comp299.herokuapp.com
//   Date: 5/30/21
//   Updated: 06/17/21
//   Description: This file for configuration the app
// Add some feature for passport and contact

let createError = require("http-errors");
let express = require("express");
let path = require("path");

//*************Authentication Section ****************** */
let session = require("express-session");
let passport = require("passport");
let passportlocal = require("passport-local");
let localStategy = passportlocal.Strategy;
let flash = require("connect-flash");

//*******************Database Configuration ********************************
let mongoose = require("mongoose");
let db = require("./db");

// Point to DB URI
mongoose.connect(db.URI, { useNewUrlParser: true, useUnifiedTopology: true });

let monogoDB = mongoose.connection;
monogoDB.on("error", console.error.bind(console, "Connection Error"));
monogoDB.once("open", () => {
  console.log("Connected to the database MongoDb...");
});

//********************* End Database Configuration ************************ */

//change the path because put app.js in config folder
let indexRouter = require("../routes/index");
let contactRouter  = require('../routes/business')

let app = express();

// view engine setup
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "../../public")));
app.use(express.static(path.join(__dirname, "../../node_modules")));

//*******************Setup express session */
app.use(
  session({
    secret: "SomeSceret",
    saveUninitialized: false,
    resave: false,
  })
);

// ***********Initialize flash
app.use(flash());

//********** Initialize passport */
app.use(passport.initialize());
app.use(passport.session());

// ******** Passport user configuation ************/
//create a user model instance
let userModel = require("../models/user");
let User = userModel.User;

//Implement a user authentication stategy


//Serialize and Deserialize user info
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser());
passport.use(User.createStrategy())

app.use("/", indexRouter);

//For using the router
app.use("/contact-list", contactRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", { title: "Error" });
});

module.exports = app;
