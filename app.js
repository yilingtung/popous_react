var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
// You need session to use connect flash
var session = require('express-session');
var bodyParser = require('body-parser');
var routers = require('./routers/index');
var app = express();
var port = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use( session({
  saveUninitialized : true,
  secret : 'Some Secret' ,
  resave : true,
}));
app.use( passport.initialize());
app.use( passport.session());
app.use(flash());
app.use('/', routers);

//Db

var Person = require('./models/person');

// Authentication
passport.use(
  new LocalStrategy(
    {},
    function(username, password, done) {
      console.log(4);
      Person.findOne({ username: username }, function(err, user) {
        if (err) { console.log(1);return done; }
        if (!user) {
          //帳號
          console.log(2);
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          //密碼
          console.log(3);
          return done(null, false, { message: 'Incorrect password.' });
        }
        //正確
        console.log(5);
        return done(null, {
          username: username,
          idname: user.idname,
          id: user._id
        });
      });
    })
);

passport.serializeUser( function(user, done) {
  return done(null, user);
});

passport.deserializeUser( function(user, done) {
  return done(null, user);
});



app.get('/', function(req, res) {
  var error = req.flash('error')[0];
  res.render('index', {login_message : error});
});

app.post('/login', passport.authenticate('local', {
  failureRedirect: '/',
  successFlash: 'Welcome!',
  failureFlash: '帳號或密碼錯誤'
}),
function(req, res) {
  //Login success function
  req.session._id = req.user.id;
  console.log(req.user.id);
  res.redirect('/member');
});

app.listen(port, function() {
  console.log('started');
});
