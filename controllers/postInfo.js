var Person = require('../models/person');
var Post = require('../models/post');
module.exports = function(req, res, next) {
    Post.find({}).populate('userid').exec(function(err, posts){
      if (err) throw err;
      for(index = 0 ; posts.length>index; index++ ){
        if(posts[index].imgContentData != null){
          var buf = new Buffer(posts[index].imgContentData);
          posts[index].imgContentType = buf.toString();
        }
          var buff = new Buffer(posts[index].userid.imgContentData);
          posts[index].userid.imgContentType = buff.toString();
      }
      posts.sort(function(a,b){
        return (b.updateTime - a.updateTime );
      });
      res.json(posts);
	  });
};
