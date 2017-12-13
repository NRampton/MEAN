const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
  retrieve(req, res) {
    User.find({}).sort('-score').exec((err, users) => {
      if (err) {
        return res.status(404).json(err);
      }
      return res.json(users);
    })
  },
  create(req, res) {
    let user = new User(req.body);
    user.save((err) => {
      if (err) {
        return res.status(404).json(err);
      }
      return true;
    })
  }
}