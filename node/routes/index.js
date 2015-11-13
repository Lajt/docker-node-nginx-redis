var express = require('express');
var router = express.Router();


var redis = redis = require('redis');

var client = redis.createClient('6379', 'redis');

/* GET home page. */
router.get('/', function(req, res, next) {
  client.incr('counter', function(err, counter) {
    if(err) return next(err);
    res.render('index', { title: 'Docker Magic', count: counter });    
  });

  
});

module.exports = router;
