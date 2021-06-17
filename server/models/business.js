// File name: business.js
//   Author's name: Mohammad Etedali - 301056465
//   Website address: https://comp299.herokuapp.com
//   Date: 6/17/21
//   Description: This file is used for model of the business contact
// The model is the first step of the creating the collection for the Db

const mongoose = require("mongoose");

// Create Model Class
let contactModel = mongoose.Schema(
  {
    name: String,
    number: Number,
    email: String,
  },
  {
    collection: "contact",
  }
);

module.exports = mongoose.model("contact", contactModel);
