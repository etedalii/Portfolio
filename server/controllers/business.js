const express = require("express");
let router = express.Router();
const mongoose = require("mongoose");

//Connect to the schema
let Contact = require("../models/business");

module.exports.displayBusinessContactList = (req, res, next) => {
    Contact.find((err, BusinessContactList) => {
    if (err) {
      return console.error(err);
    } else {
      // Contact is our view and we pass BusinessContactList object to the view, ejs I mean
      res.render("business/list", {
        title: "BusinessContact",
        BusinessContactList,
        currentUser: req.user ? req.user.email : "",
      });
    }
  });
};

//This calll for get
module.exports.addBusinessContact = (req, res, next) => {
  res.render("business/add", { title: "Add a Business Contact" });
};

//This calll for post
module.exports.processAddBusinessContact = (req, res, next) => {
  let newContact = Contact({
    name: req.body.name,
    number: req.body.number,
    email: req.body.email
  });

  Contact.create(newContact, (err, Contact) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // refresh the contact list
      res.redirect("/contact-list");
    }
  });
};

//This calll for get
module.exports.editBusinessContact = (req, res, next) => {
  let id = req.params.id;
  Contact.findById(id, (err, contactToEdit) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.render("business/edit", { title: "Edit Business Contact", contact: contactToEdit });
    }
  });
};

//This calll for post
module.exports.processEditBusinessContact = (req, res, next) => {
  let id = req.params.id;
  let updatedContact = Contact({
    _id: id,
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
  });

  Contact.updateOne({ _id: id }, updatedContact, (err) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // refresh the contact list
      res.redirect("/contact-list");
    }
  });
};

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;
  Contact.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // refresh the contact list
      res.redirect("/contact-list");
    }
  });
};