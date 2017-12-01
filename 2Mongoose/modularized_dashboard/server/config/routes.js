const mongoose = require('mongoose');           //making sure we've got access to mongoose and the MoleRat model.
const MoleRat = mongoose.model('MoleRat');
var molerats = require('../controllers/molerats.js');

module.exports = (app) => {                 //module.exports is, in this case, a function that will pass in the app const (ln 5) when it gets required into server.js.
  app.get('/', (req, res) => {        //index: display all naked mole rats
    molerats.index(req, res);
  })    
  
  app.get('/molerats/:id', (req, res) => {    //show: display info on a particular naked mole rat
    molerats.show(req, res)
  })
  
  app.post('/molerats/new', function(req, res) {     //new: display a form to register a new naked mole rat
    molerats.new(req, res);
  })
  
  app.post('/molerats', (req, res) => {     //create: action target for new naked mole rat form
    molerats.create(req, res);
  })
  
  app.get('/molerats/edit/:id', (req, res) => {       //edit: display a form to update a particular naked mole rat
    molerats.edit(req, res);
  })   
  
  app.post('/molerats/:id', (req, res) => {       //update: action target for updating a naked mole rat
    molerats.update(req, res);
  })
  
  app.post('/molerats/destroy/:id', (req, res) => {     //destroy: deletes the indicated naked mole rat, redirects to '/'
    molerats.destroy(req, res);
  })
}