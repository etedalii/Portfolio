const express = require("express");
let router = express.Router();
const mongoose = require("mongoose");

//Connect to the schema
let Book = require("../models/book");

let bookController = require("../controllers/book");

// Get a Rout for book list apge
router.get("/", bookController.displayBookList);

/* Get a Route for Add page - Create Operation */
router.get("/add", bookController.addBook);

// Post a Route for Add page - Create Operation
router.post("/add", bookController.processAddBook);

// Get a Route for Add page - Update Operation
router.get("/edit/:id", bookController.editBook);
// Post a Route for Add page - Update Operation
router.post("/edit/:id", bookController.processEditBook);

// Get a perform Deletion - Delete Operation
router.get("/delete/:id", bookController.performDelete);

module.exports = router;
