// File name: business.js
//   Author's name: Mohammad Etedali - 301056465
//   Website address: https://comp299.herokuapp.com
//   Date: 6/17/21
//   Description: This file for routing business contact

const express = require("express");
let router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// instance of controller for run operations
let businessController = require("../controllers/business");

//helper function for the guard perpuses
function requireAuth(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

// Get a Route for business contact list apge
router.get("/", businessController.displayBusinessContactList);

/* Get a Route for Add page - Create page */
router.get("/add", requireAuth, businessController.addBusinessContact);

// Post a Route for Add page - Create Operation
router.post("/add", requireAuth, businessController.processAddBusinessContact);

// Get a Route for Add page - Update page
router.get("/edit/:id", requireAuth, businessController.editBusinessContact);

// Post a Route for Add page - Update Operation
router.post("/edit/:id", requireAuth, businessController.processEditBusinessContact);

// Get a perform Deletion - Delete Operation
router.get("/delete/:id", requireAuth, businessController.performDelete);

module.exports = router;