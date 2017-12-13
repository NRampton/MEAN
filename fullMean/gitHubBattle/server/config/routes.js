const Users = require('../controllers/users');

module.exports = (app) => {
  app.get('/rankings', Users.retrieve);
  app.post('/users/:id', Users.create);
}