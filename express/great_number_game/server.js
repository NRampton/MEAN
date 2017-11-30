var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session= require('express-session');

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'a very, very secret key indeed', resave: true, saveUninitialized: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  req.session.target = Math.floor(Math.random() * 100 + 1);
  res.render('index');
})

app.post('/guess', function(req, res) {
  var guess = req.body.guess;
  var target = req.session.target;
  console.log(`Target number is ${target}.`)
  var data = {};
  if (guess == target) {
    data.feedback = 'spot_on';
  } else if (guess > target) {
    data.feedback = 'high';
  } else if (guess < target) {
    data.feedback = 'low';
  }
  data.guess = guess;
  console.log(`They guessed ${data.guess}`);
  console.log(`Feedback will be ${data.feedback}`)
  res.render('replacement', {data: data})
})

app.listen(8000);