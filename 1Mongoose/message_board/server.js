const express = require('express');         //set up requirements
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();                       //get your express instance going

app.use(bodyParser.urlencoded({extended: true}));       //app.use to import/setup middleware
app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');         //app.set to create/modify settings in the app config object
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/message_board');      //connecting to database

var Schema = mongoose.Schema;                 //Setting up schemata

var MessageSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 4},
  content: { type: String, required: true},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
}, {timesptamps: true});

var CommentSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 4},
  content: { type: String, required: true},
  _message: {type: Schema.Types.ObjectId, ref: 'Message'},
}, { timestamps: true});

mongoose.model('Message', MessageSchema);       //setting then getting the models according to the schemata we made
mongoose.model('Comment', CommentSchema);
const Message = mongoose.model('Message');
const Comment = mongoose.model('Comment');


//Message.find({})
//  .then(messages => res.render('index'));
//  .catch(err => res.redirect('/'))


app.get('/', (req, res) => {                                        //Main page route, renders index.ejs
  Message.find({}).sort({_id: -1}).populate('comments').exec((err, messages) => {
  console.log(messages);
    if (err) {
    console.log('Something went wrong with the database query.');
    return res.redirect('/oops');
  }  
  return res.render('index', {messages: messages});
  });
})

app.get('/oops', (req, res) => {            //Route in case the main db query fails.
  return res.render('oops');
})

app.post('/new_message', (req, res) => {
  var body = req.body;
  var new_message = new Message(req.body);
  new_message.save((err) => {
    if (err) {
      console.log("Couldn't post that message.");
      for (error of err){
        console.log(error);
      }
      return res.redirect('/');
    }
    return res.redirect('/');
  })
})

app.post('/new_comment', (req, res) =>{
  console.log(req.body);
  Message.findOne({_id: req.body.message_id}, (err, message) => {
    console.log(message);
    var comment = new Comment(req.body);
    message.comments.push(comment);
    comment.save((err) => {
      message.save((err) => {
        if (err) {
          for (error of err) {
            console.log(error);
            return res.redirect('/');
          }
        }
        res.redirect('/');
      })
    })
  })
})
mongoose.Promise = global.Promise;

app.listen(8000, () => {
  console.log("Hey there, I'm your server. Just wanted to let you know I'm listening to port 8000.");
})