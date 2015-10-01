var express = require('express');
var Note = require('../model/Note');
var ejs = require('ejs');
var router = express.Router();

ejs.filters.dateFormat = function(time) {
  return new Date(time).toISOString().replace(/T/, ' ').replace(/\..+/, '') ;
};

/* GET home page. */
router.get('/', function(req, res) {
  if(req.session.visitCount) {
    req.session.visitCount++;
  } else {
    req.session.visitCount = 1;
  }
  console.log(req.session);
  Note.query(function(result){
    res.render('index', {data:result});
  });
});

module.exports = router;
