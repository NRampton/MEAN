const mongoose = require('mongoose');
const Player = mongoose.model('Player');

module.exports = {
  displayAll(req, res) {
    Player.find({}, (err, players) => {
      if (err) {
        return res.status(404).json(err);
      }
      return res.json(players);
    })
  },
  create(req, res) {
    let newPlayer = new Player(req.body);
    Player.save(newPlayer, (err, player) => {
      if (err) {
        return res.status(404).json(err);
      }
      return res.json(player);
    })
  },
  destroy(req, res) {
    let id = req.params.id;
    Player.remove({ _id: id}, (err) => {
      if (err) {
        return res.status(404).json(err);
      }
      return res.json(true);
    })
  },
  update(req, res) {
    let id = req.body.id;
    let game = req.body.game;
    Player.find({ _id: id}, (err, player) {
      if (err) {
        return res.status(404).json(err);
      }
      player.status
    })
  }
}