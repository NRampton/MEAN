const Players = require('../controllers/players.js');

module.exports = function(app) {
  app.get('/players', Players.displayAll);
  app.post('/players', Players.create);
  app.put('/players/:id', Players.update);
  app.delete('players/:id', Players.destroy);
}