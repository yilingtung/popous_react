var Person = require('../models/person');
var Post = require('../models/post');
module.exports = function(req, res, next) {
  if(req.session._id != null){
    Person.findOne({_id : req.session._id},function(err,user) {
      if (err) throw err;
      const buf = new Buffer(user.imgContentData);
      user.imgContentType = buf.toString();
      res.json(user);
    });
  }
};
