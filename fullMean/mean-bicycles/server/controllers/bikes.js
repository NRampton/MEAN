const mongoose = require('mongoose');
const Bike = mongoose.model('Bike');
const User = mongoose.model('User');
const bodyParser = require('body-parser');
const session = require('express-session');

module.exports = {
	index: function (req, res) {
		console.log('Hit the index route...');
		Bike.find({},(err, bikes) =>{
			if(err) {
				console.log(`There was some sort of error in the index route:\n ${err}`);
				return res.status(404).json(err);
			} else {
				return res.json(bikes);
			}
		});
	},
	retrieveOne: function (req, res) {
		console.log('Hit retrieveOne route...');
		Bike.findOne({ _id: req.params.id }, (err, bike) => {
			if (err) {
				console.log(`There was some sort of error in the retrieveOne route:\n ${err}`);
				return res.status(404).json(err);
			}
			return res.json(bike);
		});
	},
	create: function (req, res) {
		console.log("request body:");
		console.log(req.body);
		console.log("Incoming request parameters are: ");
		console.log(req.params);
		User.findById(req.params.user_id, (err, user) => {
			console.log("Found a user!");
			console.log(user);
			var bike = new Bike(req.body);
			bike._user = user._id;
			bike.save((err) => {
				user.bikes.push(bike);
				user.save((err) => {
					if (err) {
						return res.status(404).json(err);
					}
					return res.json(user);
				})
			})
		})
	},
	update: function (req, res) {
		Bike.findByIdAndUpdate(req.params.id, req.body, (err, bike) => {
			if (err) {
				return res.status(404).json(err);
			}
			return res.json(true);
		});
	},
	destroy: function (req, res) {
		Bike.findByIdAndRemove(req.params.id, (err, bike) => {
			if (err) {
				return res.status(404).json(err);
			}
			return res.json(true);
		});
	},
	theNuclearOption: function (req, res) {
		Bike.remove({}, (err) => {
			if (err) {
				return res.status(404).json(err);
			}
			return res.json(true);
		});
	}
}
