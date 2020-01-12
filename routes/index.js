var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name: 'Express' });
});
/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { name: 'About' });
});
/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { name: 'Contact' });
});
/* GET estimate page. */
router.get('/estimate', function(req, res, next) {
  res.render('estimate', { name: 'Estimate' });
});
/* GET photos page. */
router.get('/photos', function(req, res, next) {
  res.render('photos', { name: 'Photos' });
});
/* GET service area page. */
router.get('/service-area', function(req, res, next) {
  res.render('service-area', { name: 'Service Area' });
});
/* GET forms page. */
router.get('/forms', function(req, res, next) {
  res.render('forms', { name: 'Forms' });
});

module.exports = router;
