const TaskController = require('../controllers/tasks');

module.exports = (app) => {
  app.get('/tasks', TaskController.readAll);
  app.get('/tasks/:id', TaskController.readOne);
  app.post('/tasks', TaskController.create);
  app.put('/tasks/:id', TaskController.update);
  app.delete('task/:id', TaskController.destroy);
}