var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function (req, res, next) {
  var a;
  
  var random = Math.random();
  console.log(req.query.a);
  b = req.query.a;

  // checking if url has params
  if (a == undefined) {
    a = random;
  }
  
  let atan2 = Math.atan2(a,a) 
  //console.log(atan2); 
  let atanh = Math.atanh(a) 
  let cbrt = Math.cbrt(a)  
 
  res.render('computation', {
    title: 'Computation',
    Calculate: `applied to ` + a  + ` is ` + atan2,
    c1: `applied to ` + a + ` is ` + atanh,
    c2: `applied to ` + a + ` is ` + cbrt,
    
  });
});

module.exports = router;