var Person = require('../models/person');

module.exports = function(req, res, next) {
  if(req.session.idname == req.body.idname){
    Person.findOneAndUpdate({ _id: req.session._id }, req.body, function(err, user) {
      if (err) throw err;
      console.log('update successifully!');
      res.json({update_status: 1 , response: '/member'});
    });
  }
  else{
    Person.findOne({idname:req.body.idname}, function(err, user) {
      if (user) {
        console.log('The idname that you chose has already been taken.');
        res.json({update_status : 0 , response : '已經被使用過了'});
      }
      else {
        Person.findOneAndUpdate({ _id: req.session._id }, req.body, function(err, user) {
      		if (err) throw err;
      		console.log('update successifully!');
          res.json({update_status: 1 , response: '/member'});
      	});
      }
    });
  }
};
