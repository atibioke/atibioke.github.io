var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

/* GET car page. */
router.get('/cars', function(req, res, next) {
  res.render('index', { title: 'cars' });
});

/* GET notifications page. */
router.get('/mine/notifications', function(req, res, next) {
  res.render('index', { title: 'notifications' });
});

/* GET start selling page. */
router.get('/post/cate', function(req, res, next) {
  res.render('index', { title: 'Start Selling' });
});

/* GET profile page. */
router.get('/mine/adverts', function(req, res, next) {
  res.render('index', { title: 'profile' });
});

/* GET change password page. */
router.get('/mine/password', function(req, res, next) {
  res.render('index', { title: 'change password' });
});

/* GET house to let page. */
router.get('/house-to-let', function(req, res, next) {
  res.render('index', { title: 'house to let' });
});

/* GET change password page. */
router.get('/mine/password', function(req, res, next) {
  res.render('index', { title: 'change password' });
});



module.exports = router;
