var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'a very, very secret key indeed', resave: true, saveUninitialized: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request,response) {
  if (!request.session.hasOwnProperty('count')) {
    request.session.count = 0;
  }
  request.session.count += 1;
  response.render('index', {count: request.session.count});
})

app.post('/add', function(request, response){
  request.session.count += 1;
  response.redirect('/');
})

app.post('/reset', function(request, response) {
  request.session.count = 0;
  response.redirect('/');
})

app.listen(8000);
console.log("GoOoOOOOOOod Morning 8000!");