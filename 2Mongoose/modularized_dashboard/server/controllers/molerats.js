var mongoose = require('mongoose');
var MoleRat = mongoose.model('MoleRat');

module.exports = {
  index: (req, res) => {
    MoleRat.find({}, (err, molerats) => {
      if(err) {
        console.log('db query failed');
        return res.redirect('/');
      }
      return res.render('index', {molerats});
    })
    console.log(MoleRat);
  },
  show: (req, res) => {
    MoleRat.find({_id: req.params.id}, (err, info) => {
      if(err) {
        console.log('db query failed');
        return res.redirect('/');
      }
      return res.render('display_molerat', {info})
    })
  },
  new: (req, res) => {
    return res.render('new_molerat');
  },
  create: (req, res) => {
    var body = req.body;
    thisrat = new MoleRat(body);
    thisrat.save((err) => {
      if (err) {
        console.log("We couldn't fit that naked mole rat in the burrow...");
        return res.redirect('/')
      }
      return res.redirect('/');
    })
  },
  edit: (req, res) => {
    MoleRat.find({_id: req.params.id}, (err, molerat) => {
      if(err) {
        console.log("Couldn't find that mole rat, I'm afraid.");
        return res.redirect('/')
      }
      console.log(molerat);
      return res.render('update_molerat', {molerat: molerat});
    })
  },
  update: (req, res) => {
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
  },
  destroy: (req, res) => {
    MoleRat.remove({_id: req.params.id}, (err) => {
      if(err) {
        console.log("Those naked mole rats are tough. We couldn't get that one out.")
        return res.redirect(`/molerats/${req.params.id}`);
      }
      return res.redirect('/');
    })
  }
}