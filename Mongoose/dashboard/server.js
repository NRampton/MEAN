const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/dashboard');

const MoleRatSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  color: {
    type: String,
  },
  favorite_clothes: {
    type: String,
  }
}, {timestamps: true});

mongoose.model('MoleRat', MoleRatSchema);
const MoleRat = mongoose.model('MoleRat');



app.listen(8000, () => {
  console.log("We're live on 8000.");
})