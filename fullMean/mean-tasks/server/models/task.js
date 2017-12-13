const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  content: {
    type: String,
    minlength: [5, 'Task must be five characters long at least.'],
    required: [true, 'Tast description is required.']    
  },
  assignee: {
    name: {
      type: String,
      required: [true, 'Please provide a name.']
    }
  },
  status: {
    type: Boolean
  }
}, {timestamps: true})

mongoose.model('Task', TaskSchema);