const mongoose = ('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt-as-promised');

module.exports = {
  index: (req, res) => {
    return res.render('index');
  },

  register: (req, res) => {
    let body = req.body;
    let newUser = new User(body);
    newUser.save((err) => {
      if (err) {
        console.log(err);
        console.log("There were a few hiccups");
        return res.render('index', {errors: newUser.errors});
      }
      return res.redirect('/success');
    })
  },

  login: (req, res) => {
    let body = req.body;
    let user = User.find({email: body.email}, (err, user) => {
      if (err) {
        return res.render('index', {errors: user.errors});
      }
      bcrypt.compare(body.password, user.password)
      .then(() =>{
        return res.redirect('/success');
      })
    })
  },

  success: (res, req) => {
    return res.render('success', {user: user});
  }
}