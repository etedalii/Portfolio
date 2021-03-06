// File name: index.js
//   Author's name: Mohammad Etedali - 301056465
//   Website address: https://comp299.herokuapp.com
//   Date: 6/30/21
//   Description: This file for routing

let express = require("express");
let router = express.Router();

let indexController = require("../controllers/index");

/* GET home page. */
router.get("/", indexController.displayHomePage);

router.get("/home", indexController.displayHomePage);

/* GET Project page. */
router.get("/project", indexController.displayProjectPage);

/* GET Service page. */
router.get("/service", indexController.displayServicePage);

/* GET Contact Me. */
router.get("/contact", indexController.displayContactPage);

/* GET About Me page. */
router.get("/about", indexController.displayAboutPage);

/* Get Login Page for access to the website */
router.get('/login', indexController.displayLoginPage)

/* Get Login Page for access to the website */
router.post('/login', indexController.processLoginPage)

/* Get logout the user from the website */
router.get('/logout', indexController.performLogout)

module.exports = router;
