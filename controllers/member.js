var Person = require('../models/person');
var Post = require('../models/post');
module.exports = function(req, res, next) {
  //Session _id
  //_id Person.findOne(_id : _id){ ...res.render('member', {name : user}) }


  Person.findOne({_id : req.session._id}, function(err, user) {
		if (err) throw err;
    console.log(req.session._id);
    Post.find({}).populate('userid').exec(function(err, posts){
      if (err) throw err;
      console.log(posts[0].userid.idname);
      res.render('member', {
        user : user,
        userpost :posts,
        update_message : null
      });
    });


      /*
      Person.find({idname : posts['userid']},function (err,person) {
        if (err) throw err;
        console.log(posts['userid']);
        res.render('member', {
          user : user,
          userpost :posts,
          person : person,
          update_message : null
        });
      });
      */
	});
};
