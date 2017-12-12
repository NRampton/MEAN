var mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const TaskSchema = new mongoose.Schema({
  title: {
    type: 'string',
    trim: true,
    required: [true, 'Task title is required'],
    unique: true,
  },
  description: {
    type: 'string',
    trim: true,
    default: '',
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  }
}, {
  timestamps: true
});

TaskSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
var task = mongoose.model('Task', TaskSchema);