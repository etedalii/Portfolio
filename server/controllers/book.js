const express = require("express");
let router = express.Router();
const mongoose = require("mongoose");

//Connect to the schema
let Book = require("../models/book");

module.exports.displayBookList = (req, res, next) => {
  Book.find((err, BookList) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(BookList);

      // book is our view and we pass BookList object to the view, ejs I mean
      res.render("book/list", { title: "Books", BookList });
    }
  });
};

module.exports.addBook = (req, res, next) => {
  res.render("book/add", { title: "Add Book" });
};

module.exports.processAddBook = (req, res, next) => {
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
};

module.exports.editBook = (req, res, next) => {
  let id = req.params.id;

  Book.findById(id, (err, bookToEdit) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.render("book/edit", { title: "Edit Book", book: bookToEdit });
    }
  });
};

module.exports.processEditBook = (req, res, next) => {
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
};

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;
  Book.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // refresh the book list
      res.redirect("/book-list");
    }
  });
};
