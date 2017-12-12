const mongoose = require('mongoose');
const Task = mongoose.model('Task');
const tasks = require('../controllers/tasks.js');

module.exports = (app) => {
  app
    .get('/tasks', tasks.index)
    .post('/tasks', tasks.create)
}