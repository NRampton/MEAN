var mongoose = require('mongoose');
var Person = mongoose.model('Person');

module.exports = {
  index: (req, res) => {
    Person.find({}, (err, persons) => {
      if (err) {
        console.log('Query failed.');
        res.json({you: 'dun screwed up'});
      }
      res.json(persons);
    })
  },
  show: (req, res, name) => {
    Person.find({name: name}, (err, person) => {
      if (err) {
        console.log('Query failed.');
        res.json({you: 'dun screwed up'});
      }
      res.json(person);
    })
  },
  destroy: (req, res, name) => {
    Person.remove({name: name}, err => {
      if (err) {
        console.log('Query failed.');
        res.json({you: 'dun screwed up'});
      }
      res.json({person: 'removed'});
    })
  },
  add: (req, res, name) => {
    let person = new Person({name: name });
    person.save(err => {
      if (err) {
        console.log('Query failed.');
        res.json({you: 'dun screwed up'});
      }
      res.json({person: 'created'});
    })
  }
}