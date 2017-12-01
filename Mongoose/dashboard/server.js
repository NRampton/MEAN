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

app.get('/', (req, res) => {        //display all naked mole rats
  MoleRat.find({}, (err, molerats) => {
    if(err) {
      console.log('db query failed');
      return res.redirect('/');
    }
    return res.render('index', {molerats});
  })
})    

app.get('/molerats/:id', (req, res) => {    //display info on a particular naked mole rat
  MoleRat.find({_id: req.params.id}, (err, info) => {
    if(err) {
      console.log('db query failed');
      return res.redirect('/');
    }
    return res.render('display_molerat', {info})
  })
})

app.post('/molerats/new', function(req, res) {     //display a form to register a new naked mole rat
  return res.render('new_molerat');
})

app.post('/molerats', (req, res) => {     //action target for new naked mole rat form
  var body = req.body;
  thisrat = new MoleRat(body);
  thisrat.save((err) => {
    if (err) {
      console.log("We couldn't fit that naked mole rat in the burrow...");
      return res.redirect('/')
    }
    return res.redirect('/');
  })
})

app.get('/molerats/edit/:id', (req, res) => {       //display a form to update a particular naked mole rat
  MoleRat.find({_id: req.params.id}, (err, molerat) => {
    if(err) {
      console.log("Couldn't find that mole rat, I'm afraid.");
      return res.redirect('/')
    }
    console.log(molerat);
    return res.render('update_molerat', {molerat: molerat});
  })
})   

app.post('/molerats/:id', (req, res) => {       //action target for updating a naked mole rat
  var id = req.params.id;
  var body = req.body;
  MoleRat.find({_id: id}, (err, molerat) => {
    console.log(molerat);
    molerat[0].name = body.name;
    molerat[0].age = body.age;
    molerat[0].color = body.color;
    molerat[0].favorite_clothes = body.favorite_clothes;
    console.log(molerat);
    molerat[0].save((err) => {
      if(err) {
        console.log("That didn't go through, I'm afraid.");
        return res.redirect(`/molerats/edit/${id}`)
      }
      return res.redirect(`/molerats/${id}`);
    })
  })
})

app.post('/molerats/destroy/:id', (req, res) => {     //deletes the indicated naked mole rat, redirects to '/'
  MoleRat.remove({_id: req.params.id}, (err) => {
    if(err) {
      console.log("Those naked mole rats are tough. We couldn't get that one out.")
      return res.redirect(`/molerats/${req.params.id}`);
    }
    return res.redirect('/');
  })
})


app.listen(8000, () => {
  console.log("We're live on 8000.");
})