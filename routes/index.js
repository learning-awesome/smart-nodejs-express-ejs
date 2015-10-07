var express = require('express');
var Article = require('../model/article');
var ejs = require('ejs');
var router = express.Router();

ejs.filters.dateFormat = function (time) {
  return new Date(time).toISOString().replace(/T/, ' ').replace(/\..+/, '');
};

/* GET home page. */
router.get('/', function (req, res) {
  if (req.session.visitCount) {
    req.session.visitCount++;
  } else {
    req.session.visitCount = 1;
  }
  console.log(req.session);
  Article.query(1, 20, function (result) {
    res.render('index', {data: result});
  });
});

router.get('/article/page/:pageIndex/:pageSize', function (req, res) {
  var pageIndex = req.params.pageIndex;
  var pageSize = req.params.pageSize;
  console.log('--------pageIndex:' + pageIndex + ' pageSize:' + pageSize);
  Article.query(pageIndex, pageSize, function (result) {
    res.render('template/default/article/page', {data: result});
  });
});

module.exports = router;
