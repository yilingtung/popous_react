var mongoose = require('mongoose');
mongoose.connect('mongodb://irene:123@ds011321.mlab.com:11321/popous');
var Schema = mongoose.Schema;
var personSchema = new Schema({
  idname : String,
  username : String,
  password  : String,
  imgname :String,
  imgContentData: Buffer,
  imgContentType: String

},{ collection: 'userinfo' });
personSchema.methods.validPassword = function( pwd ) {
    // EXAMPLE CODE!
    return ( this.password === pwd );
};
module.exports = mongoose.model('Person', personSchema);
