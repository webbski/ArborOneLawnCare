var express = require('express');
var router = express.Router();

/* GET services listing. */
router.get('/', function(req, res, next) {
    res.render('services', { name: 'Services' });
});
/* GET mowing services page. */
router.get('/mowing', function(req, res, next) {
  res.render('mowing', { name: 'Mowing' });
});
/* GET spring clean up services page. */
router.get('/springcleanup', function(req, res, next) {
  res.render('spring-cleanup', { name: 'Spring Clean Up' });
});

module.exports = router;