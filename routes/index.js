var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET Project page. */
router.get('/project', function(req, res, next) {
  res.render('index', { title: 'Project' });
});

/* GET Service page. */
router.get('/service', function(req, res, next) {
  res.render('index', { title: 'Service' });
});

/* GET Contact Me. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

/* GET About Me page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

module.exports = router;
