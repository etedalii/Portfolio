const express = require("express");
let router = express.Router();
const mongoose = require("mongoose");

//Connect to the schema
let Book = require("../models/book");

// Get a Rout for book list apge
router.get("/", (req, res, next) => {
  Book.find((err, BookList) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(BookList);

      // book is our view and we pass BookList object to the view, ejs I mean
      res.render("book/list", { title: "Books", BookList });
    }
  });
});

/* Get a Route for Add page - Create Operation */
router.get("/add", (req, res, next) => {
  res.render("book/add", { title: "Add Book" });
});

// Post a Route for Add page - Create Operation
router.post("/add", (req, res, next) => {
  let newBook = Book({
    name: req.body.name,
    author: req.body.author,
    published: req.body.published,
    Description: req.body.Description,
    price: req.body.price,
  });

  Book.create(newBook, (err, Book) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // refresh the book list
      res.redirect("/book-list");
    }
  });
});

// Get a Route for Add page - Update Operation
router.get("/edit/:id", (req, res, next) => {
  let id = req.params.id;

  Book.findById(id, (err, bookToEdit) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.render("book/edit", { title: "Edit Book", book: bookToEdit });
    }
  });
});
// Post a Route for Add page - Update Operation
router.post("/edit/:id", (req, res, next) => {
  let id = req.params.id;

  let updatedBook = Book({
    _id: id,
    name: req.body.name,
    author: req.body.author,
    published: req.body.published,
    Description: req.body.Description,
    price: req.body.price,
  });

  Book.updateOne({ _id: id }, updatedBook, (err) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // refresh the book list
      res.redirect("/book-list");
    }
  });
});

// Get a perform Deletion - Delete Operation
router.delete("/delete/:id", (req, res, next) => {
  let id = req.params.id;
  Book.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // refresh the book list
      res.render("/book-list");
    }
  });
});

module.exports = router;
