var express = require('express');
var router = express.Router();

var homepageController = function(req, res) {
  res.render('index', {title: 'Roger Panella | Web Developer'});
};

/* GET home page. */
router.get('/', homepageController);

module.exports = router;
