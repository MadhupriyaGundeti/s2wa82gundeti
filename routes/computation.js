var express = require('express');
const { param } = require('./users');
var router = express.Router();
var s = Math.random().toFixed(2);


console.log(s);
/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.query.s != undefined) {
    s = req.query.s;
  }
   
  res.render('computation', { Calculate: 'atanh of ' +s+' is '+Math.atanh(s) });
});
module.exports = router;