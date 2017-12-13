const TaskController = require('../controllers/tasks');
const path = require('path');

module.exports = (app) => {
  app.get('/api/tasks', TaskController.readAll);
  app.get('/api/tasks/:id', TaskController.readOne);
  app.post('/api/tasks', TaskController.create);
  app.put('/api/tasks/:id', TaskController.update);
  app.delete('/api/tasks/:id', TaskController.destroy);
  app.all("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'public', 'dist', 'index.html'));
  })
}