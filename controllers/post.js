var Post = require('../models/post');
var multiparty	=	require('multiparty');
var fs = require('fs');


var t_content;

module.exports = function(req, res, next) {
	//res.send('Thank you!');
  console.log('controllers post');
  var post = new Post();
    var form = new multiparty.Form();
    form.parse(req, function(err, fields, files) {
      console.log(files.userPhoto[0].path);
      t_content = fields.postcontent;
      console.log(t_content);
      post.userid = req.session._id;
      post.postcontent = t_content;
      post.imgContentData = fs.readFileSync(files.userPhoto[0].path, "base64");
      post.imgContentType = 'image/png';
  		post.save(function(err){
  			if (err) throw err;
  			console.log('post saved!');
  		});

      res.redirect('/member');
    });
};
