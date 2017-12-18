const Users = require('../controllers/users');
const path = require('path');

module.exports = (app) => {
  app.get('/rankings', Users.retrieve);
  app.post('/users/:id', Users.create);
  app.all("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'public', 'dist', 'index.html'));
  });
}