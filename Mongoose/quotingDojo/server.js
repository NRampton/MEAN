const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path')

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')))

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/quotingDojo');

const QuoteSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  content: {
    type: String,
  }
}, {timestamps: true});

mongoose.model('Quote', QuoteSchema);
const Quote = mongoose.model('Quote');

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/quotes', (req, res) => {
  Quote.find({}).sort({ createdAt: -1}).exec((err, quotes) => {
    if(err) {
      console.log(err);
      return res.redirect('/');
    }
    return res.render('quotes', {quotes})
  })
})

app.post('/quotes', (req, res) => {
  // const body = req.body;
  const {body} = req
  const quote = new Quote(body);    //If you've set up your form input names to be the same as the keys in the schema.
  quote.save((err) => {
    if (err) {
      console.log("Somethin' dun' bustid.");
      return redirect('/');
    }
    return res.redirect('/quotes');
  })
})

app.listen(8000, () => {
  console.log("We're live on 8000.")
})