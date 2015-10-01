var express = require('express');
var router = express.Router();
var Note = require('../model/Note');
console.log(Note);

/* GET home page. */
router.get('/', function(req, res) {
  Note.query(function(result){
    res.render('index', {data:result});
  });
});

module.exports = router;
