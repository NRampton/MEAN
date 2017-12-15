'use strict';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BikeSchema = new Schema({
	title: {
		type: String,
		required: [true, "You must provide a title for your post."]
	},
	description: {
		type: String,
		required: [true, "You must provide a description of your bicycle."],
		maxlength: 200
	},
	price: {
		type: Number,
		required: [true, "You must provid a price for your bicycle, minimum $1."]
	},
	location: {
		type: String,
		required: [true, "You must provide a rough location for your bicycle."]
	},
	imageUrl: {
		type: String,
		required: [true, "A URL to an image file is required."]
	},
	_user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: [true, "This bike must be associated with a specific user."]
	}
}, {timestamps: true})
const Bike = mongoose.model('Bike', BikeSchema);
