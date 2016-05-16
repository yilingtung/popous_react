var express = require('express'),
    person  = require('../controllers/signup'),
    index = require('../controllers/index'),
    member = require('../controllers/member'),
    post = require('../controllers/post'),
    update = require('../controllers/update'),
    router  = express.Router();

router.route('/').get(function(req, res) {
  var error = req.flash('error')[0];
  var signup_error = req.flash('signup_error')[0];
  res.render('index', {login_message : error, signup_message : signup_error});
});

router.route('/signup').post(person);

router.route('/member').get(member)
                       .put(update);

router.route('/post').post(post);

module.exports = router;
