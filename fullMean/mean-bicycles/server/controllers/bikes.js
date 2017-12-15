const mongoose = require('mongoose');
const Bike = mongoose.model('Bike');
const bodyParser = require('body-parser');

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
		Bike.create(req.body, (err, bike) => {
			if (err) {
				console.log(`There was some sort of error in the create route:\n ${err}`);
				return res.status(404).json(err);
			}
			return res.json(true);
		});
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
