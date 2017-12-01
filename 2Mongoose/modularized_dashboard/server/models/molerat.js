var mongoose = require('mongoose');

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

var MoleRat = mongoose.model('MoleRat', MoleRatSchema);