  // File name: index.js
	//   Author's name: Mohammad Etedali - 301056465
	//   Website address: https://comp299.herokuapp.com
	//   Date: 6/30/21
	//   Description: This file for routing   


var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Home",
    message:
      "Web development, especially freelance web development has been steadily growing as businesses are increasingly going online. Many talented developers offer freelance web development in addition to their day jobs or some of them have fully embraced the freelance life. Nevertheless, every web developer that wants to be successful needs to have their web developer portfolio on the internet where it can be accessed easily.",
  });
});

router.get("/home", function (req, res, next) {
  res.render("index", {
    title: "Home",
    message:
      "Web development, especially freelance web development has been steadily growing as businesses are increasingly going online. Many talented developers offer freelance web development in addition to their day jobs or some of them have fully embraced the freelance life. Nevertheless, every web developer that wants to be successful needs to have their web developer portfolio on the internet where it can be accessed easily.",
  });
});

/* GET Project page. */
router.get("/project", function (req, res, next) {
  res.render("index", { title: "Project", message: "" });
});

/* GET Service page. */
router.get("/service", function (req, res, next) {
  res.render("index", { title: "Service", message: "" });
});

/* GET Contact Me. */
router.get("/contact", function (req, res, next) {
  res.render("index", { title: "Contact", message: "" });
});

/* GET About Me page. */
router.get("/about", function (req, res, next) {
  res.render("index", { title: "About", message: "I, Mohammad Etedali with More than 8 years’ experience in programming with Microsoft products, am a responsible, highly motivated, highly organized, result-oriented, and self-motivated person. I have expertise in C# .Net, SQL Server, and ASP.Net MVC." });
});

module.exports = router;
