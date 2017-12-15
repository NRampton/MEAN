const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: [true, "You must provide a first name."]
  },
  last_name: {
    type: String,
    required: [true, "You must provide a last name."]
  },
  email: {
    type: String,
    required: [true, "You must provide a valid email address".]
  },
  password: {
    type: String,
    required: [true, "You must provide a password"],
    minlength: [8, "Your password must be at least 8 characters long."]
  },
  bikes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {timestamps: true});
const User = mongoose.model('User', UserSchema);