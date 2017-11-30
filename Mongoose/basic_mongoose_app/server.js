var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var path = require('path');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/basic_mongoose');
var UserSchema = new mongoose.Schema({
  name: String,
  age: Number
})
mongoose.model('User', UserSchema);
var User = mongoose.model('User');

app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(path.join(__dirname, './static')));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
      console.log('oops.');
    } else {
      console.log(users);
      res.render('index', {users: users});
    }
  })
})

app.post('/users', function(req, res) {
  console.log('POST DATA', req.body);
  var user = new User({name: req.body.username, age: parseInt(req.body.age)});
  user.save(function(err) {
    if(err) {
      console.log("oops.");
    } else {
      console.log('user added successfully');
      res.redirect('/');
    }
  })
})

app.listen(8000, function() {
  console.log("We're up and running.");
})

