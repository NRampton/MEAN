var mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
  }
}, {timestamps: true});

var Person = mongoose.model('Person', PersonSchema);