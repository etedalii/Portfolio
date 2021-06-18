/* File name: index.ejs
    Author's name: Mohammad Etedali - 301056465
	Website address: https://comp299.herokuapp.com
    Date: 6/17/21
  	Description: this file is responsible for controll all process and call proper page or method after user click on menu
*/

const express = require("express");
let router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// define the user model instance
let userModel = require("../models/user");
//create an alise
let User = userModel.User;

module.exports.displayHomePage = (req, res, next) => {
  res.render("index", {
    title: "Home",
    message:
      "Web development, especially freelance web development has been steadily growing as businesses are increasingly going online. Many talented developers offer freelance web development in addition to their day jobs or some of them have fully embraced the freelance life. Nevertheless, every web developer that wants to be successful needs to have their web developer portfolio on the internet where it can be accessed easily.",
    currentUser: req.user ? req.user.username : "",
  });
};

module.exports.displayProjectPage = (req, res, next) => {
  res.render("index", {
    title: "Project",
    message: "",
    currentUser: req.user ? req.user.username : "",
  });
};

module.exports.displayServicePage = (req, res, next) => {
  res.render("index", {
    title: "Service",
    message: "",
    currentUser: req.user ? req.user.username : "",
  });
};

module.exports.displayContactPage = (req, res, next) => {
  res.render("index", {
    title: "Contact",
    message: "",
    currentUser: req.user ? req.user.username : "",
  });
};

module.exports.displayAboutPage = (req, res, next) => {
  res.render("index", {
    title: "About",
    message:
      "I, Mohammad Etedali with More than 8 years’ experience in programming with Microsoft products, am a responsible, highly motivated, highly organized, result-oriented, and self-motivated person. I have expertise in C# .Net, SQL Server, and ASP.Net MVC.",
    currentUser: req.user ? req.user.username : "",
  });
};

module.exports.displayLoginPage = (req, res, next) => {
  //check that if user already login or not
  if (!req.user) {
    res.render("auth/login", {
      title: "Login",
      messages: req.flash("loginMessage"),
      email: req.user ? req.user.username : "",
    });
  } else {
    res.redirect("/");
  }
};

module.exports.processLoginPage = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    //If get server error
    if (err) {
      return next(err);
    }
    // is there a user login error
    if (!user) {
      req.flash("loginMessage", "Authentication Error");
      res.redirect("/login");
    }
    //Now user can login
    req.login(user, (err) => {
      //check is there server error
      if (err) {
        return next(err);
      }
      //show the page of business contact 
      return res.redirect("/contact-list");
    });
  })(req, res, next);
};

//I create this because I need it for register a user.
// we don't have register for but I wrote this module for insert user in first time
module.exports.processRegisterPage = (req, res, next) => {
  let newUser = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    name: req.body.name,
    lastname: req.body.lastname,
  });

  User.register(newUser, req.body.password, (user) => {
    if (err) {
      console.log("Error, Inserting a new User");
      if (err.name === "UserExistsError") {
        req.flash("registerMessage", "Register Error, User Already exist");
      }
      return res.render("auth/register", {
        title: "register",
        messages: req.flash("registerMessage"),
        email: req.user ? req.user.email : "",
      });
    } else {
      return passport.authenticate(req, res, () => {
        res.redirect("/");
      });
    }
  });
};

module.exports.performLogout = (req, res, next) => {
  req.logout();
  res.redirect("/");
};
