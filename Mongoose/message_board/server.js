const express = require('express');         //set up requirements
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();                       //get your express instance going

app.use(bodyParser.urlencoded({extended: true}));       //app.use to import/setup middleware
app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');         //app.set to create/modify settings in the app config object
app.set('views engine', 'ejs');

mongoose.connect('mongodb://localhost/message_board');      //connecting to database

var Schema = mongoose.Schema;                 //Setting up schemata

var MessageSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 4},
  content: { type: String, required: true},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
}, {timesptamps: true})

var CommentSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 4},
  content: { type: String, required: true},
  _message: {type: Schema.Types.ObjectId, ref: 'Message'},
}, { timestamps: true})

mongoose.model('Message', MessageSchema);       //setting then getting the models according to the schemata we made
mongoose.model('Comment', CommentSchema);
const Message = mongoose.model('Message');
const Comment = mongoose.model('Comment');


app.get('/', (req, res) => {              //Main page route, renders index.ejs
  Message.find({}).populate('Comments').exec((err, posts) => {
  if (err) {
    console.log('Something went wrong with the database query.');
    return res.redirect('/oops');
  }  
  return res.render('index', {posts: posts});
  });
})


app.listen(8000, () => {
  console.log("Hey there, I'm your server. Just wanted to let you know I'm listening to port 8000.");
})