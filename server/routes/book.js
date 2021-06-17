const express = require("express");
let router = express.Router();
const mongoose = require("mongoose");
const passport = require('passport');

//Connect to the schema
let Book = require("../models/book");

let bookController = require("../controllers/book");

//helper function for the guard perpuses
function requireAuth(req, res, next){
    // check if the user is logged in
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}

// Get a Rout for book list apge
router.get("/", bookController.displayBookList);

/* Get a Route for Add page - Create Operation */
router.get("/add",requireAuth, bookController.addBook);

// Post a Route for Add page - Create Operation
router.post("/add", requireAuth, bookController.processAddBook);

// Get a Route for Add page - Update Operation
router.get("/edit/:id",requireAuth,  bookController.editBook);
// Post a Route for Add page - Update Operation
router.post("/edit/:id",requireAuth, bookController.processEditBook);

// Get a perform Deletion - Delete Operation
router.get("/delete/:id",requireAuth, bookController.performDelete);

module.exports = router;
