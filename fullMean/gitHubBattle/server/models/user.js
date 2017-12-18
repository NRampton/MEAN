const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a username to search']
  },
  score: {
    type: Number,
    default: 0
  },
  imageUrl: {
    type: String
  }
}, {timestamps: true});

mongoose.model('User', UserSchema);
