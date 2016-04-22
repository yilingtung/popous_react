var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var postSchema = new Schema({
  userid : String,
  postcontent : String,
  imgContentData: Buffer,
  imgContentType: String

},{ collection: 'userpost' });

module.exports = mongoose.model('Post', postSchema);
