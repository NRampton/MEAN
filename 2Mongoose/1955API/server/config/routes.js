const mongoose = require('mongoose');
const Person = mongoose.model('Person');
var persons = require('../controllers/persons.js');

module.exports = (app) => {
  app.get('/', (req, res) => {
    persons.index(req, res);
  })

  app.get('/new/:name', (req, res) =>{
    var name = req.params.name;
    persons.add(req, res, name);
  })

  app.get('/remove/:name', (req, res) => {
    var name = req.params.name;
    persons.destroy(req, res, name);
  })

  app.get('/:name', (req, res) => {
    var name = req.params.name;
    persons.show(req, res, name);
  })
}