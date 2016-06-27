var Post = require('../models/post');


var t_content;

module.exports = function(req, res, next) {
	//res.send('Thank you!');
    var post = new Post(req.body);
    post.userid = req.session._id;
    /*
    post.postcontent = req.body.postcontent;
    post.imgContentData = req.body.imgContentData;
    post.updateTime = req.body.updateTime;
    */
    post.imgContentType = 'image/png';
    console.log(req.body.postcontent);
    console.log(req.body);
    console.log(post);

    post.save(function(err){
  		if (err) throw err;
  		console.log('post saved!');
      res.json({m: 1});
    });
};
