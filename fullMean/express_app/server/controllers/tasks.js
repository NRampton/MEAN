var mongoose = require('mongoose');
var Task = mongoose.model('Task');

module.exports = {
  index: (req, res) => {

    Task.find({})
      .then(tasks => response.json(tasks))
      .catch(error => console.error(error));

  },
  create: (req, res) => {

    Task.create(req.body)
      .then(task => res.json(task))
      .catch(error => console.error(error));

  }
};