const mongoose = require('mongoose');

const PlayerSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Gimme yo' name!"],
    minlength: [5, "That name's not long enough! Make it longer!"]
  },
  position: {
    type: String,
    default: '',    
  },
  game1: {
    type: String,
    default: "Undecided"
  },
  game2: {
    type: String,
    default: "Undecided"
  },
  game3: {
    type: String,
    default: "Undecided"
  }
}, {timestamps: true})

mongoose.model('Player', PlayerSchema);
