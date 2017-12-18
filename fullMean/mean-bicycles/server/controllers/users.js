const mongoose = require('mongoose');
const User = mongoose.model('User');
const bodyParser = require('body-parser');
const session = require('express-session');

module.exports = {	
  retrieveAll: (req, res) => {
    User.find({}).populate('bikes').exec((err, users) => {
      if (err) {
        return res.status(404).json(err);
      }
      return res.json(users);
    })
	},
	
	login: function (req, res) {
		console.log('Hit login route...');
		User.findOne({ email: req.body.email }).populate('bikes').exec((err, user) => {			//check to make sure bikes are populating properly
			if (err || !user) {
				console.log(`There was some sort of error in the login route:\n ${err}`);
				return res.status(404).json(err);
			}
			//check password here! Do it as a promise, and set up a .then and a catch as below.
			//.then( () => {}
			req.session._id = user._id;
			return res.json(user);
			// )
			//.catch( (err) => return res.satus(404).json(err));
		});
	},

	logout: function (req, res) {
		req.session.destroy();
	},

	create: function (req, res) {
		User.create(req.body, (err, user) => {
			if (err) {
				console.log(`There was some sort of error in the create route:\n ${err}`);
				return res.status(404).json(err);
			}
			return res.json(true);
		});
	},

	update: function (req, res) {
		User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
			if (err) {
				return res.status(404).json(err);
			}
			return res.json(true);
		});
	},

	destroy: function (req, res) {
		User.findByIdAndRemove(req.params.id, (err, user) => {
			if (err) {
				return res.status(404).json(err);
			}
			return res.json(true);
		});
	},
	
	theNuclearOption: function (req, res) {
		User.remove({}, (err) => {
			if (err) {
				return res.status(404).json(err);
			}
			return res.json(true);
		});
	}
}
