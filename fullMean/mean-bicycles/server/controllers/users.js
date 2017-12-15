const mongoose = require('mongoose');
const User = mongoose.model('User');
const bodyParser = require('body-parser');

module.exports = {	
	retrieveOne: function (req, res) {
		console.log('Hit retrieveOne route...');
		User.findOne({ _id: req.params.id }).populate('bikes').exec((err, user) => {
			if (err) {
				console.log(`There was some sort of error in the retrieveOne route:\n ${err}`);
				return res.status(404).json(err);
			}
			return res.json(user);
		});
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
