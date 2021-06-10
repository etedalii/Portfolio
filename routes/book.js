const express = require('express');
let router = express.Router();
const mongoose = require('mongoose');

//Connect to the schema
let Book = require('../models/book');

// Get a Rout for book list apge

router.get('/', (req, res, next) => {
    Book.find((err, BookList) => {
        if(err){
            return console.error(err);
        }
        else{
            //console.log(BookList);

            // book is our view and we pass BookList object to the view, ejs I mean
            res.render('book',{title: 'Book List' , BookList})
        }
    })
})

module.exports = router;