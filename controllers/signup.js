var Person = require('../models/person');
/*
module.exports = function(req, res, next) {
	//res.send('Thank you!');
  console.log('post');
  Person.findOne({idname:req.body.idname}, function(err, user) {
		if (!err) console.log('The idname that you chose has already been taken.');

    Person.findOne({username:req.body.username}, function(err, user) {
  		if (!err) console.log('The username that you chose has already been taken.');
  	});
	});
	var person = new Person({
		idname: req.body.idname,
		username: req.body.username,
    password: req.body.password
	});
	person.save(function(err){
		if (err) throw err;
		console.log('person saved!');
    req.session._id = person._id;
    res.redirect('/member');
  });
};
*/
module.exports = function(req, res, next) {
	//res.send('Thank you!');
  var b_checker = true;
  Person.findOne({idname:req.body.idname}, function(err, user) {
    if (user) {
      console.log('The idname that you chose has already been taken.');
      res.json({signup_status : 0 , response : '名字已經被使用過了'});
      b_checker = false;
    }
    if(b_checker){
      Person.findOne({username:req.body.username}, function(err, user) {
        if (user) {
          console.log('The username that you chose has already been taken.');
          res.json({signup_status : 0 , response : '帳號已經被使用過了'});
          b_checker = false;
        }
        if(b_checker){
        	var person = new Person(req.body);
        	person.save(function(err){
        		if (err) throw err;
        		console.log('person saved!');
            req.session._id = person._id;
            res.json({signup_status: 1 , response: '/member'});
          });
        }
      });
    }
  });
};
