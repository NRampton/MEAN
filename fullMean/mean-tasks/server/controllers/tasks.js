const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {
  readAll(req, res) {
    Task.find({}, (err, tasks) => {
      if (err) {
        return res.status(404).json(err);
      }
      return res.json(tasks);
    })
  },
  readOne(req, res) {
    Task.findById(req.params.id, (err, task) => {
      if (err) {
        return res.status(404).json(err);
      }
      return res.json(task);
    })    
  },
  create(req, res) {
    res.json(true);    
  },
  update(req, res) {
    res.json(true);    
  },
  destroy(req, res) {
    res.json(true);    
  }
}