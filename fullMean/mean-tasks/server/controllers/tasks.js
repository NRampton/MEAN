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
    const task = new Task(req.body);
    task.save((err) => {
      if (err) {
        return res.status(401).json(err);
      }
      return res.status(201).json(true);
    })
    res.json(task);    
  },
  update(req, res) {
    const _id = req.params.id;
    Task.update({_id: _id}, req.body, { new: true }, (err, task) => {
      if (err) {
        return res.status(404).json(err);
      }
      return res.json(task);
    })    
  },
  destroy(req, res) {
    const _id = req.params.id;
    Task.remove({_id}, (err, task) => {
      if (err) {
        return res.status(404).json(err);
      }
      return res.json(task);
    })
  },
  destroyAll(req, res) {
    Task.remove
  }
}