const bikes = require('./../controllers/bikes.js');
const users = require('./../controllers/users.js');

const {resolve} = require('path');
module.exports = function (app) {
	app.get('/api/bikes', bikes.index);
	app.get('/api/bikes/:id', bikes.retrieveOne);
	app.post('/api/bikes/:user_id', bikes.create);
	app.put('/api/bikes/:id', bikes.update);
	app.delete('/api/bikes/:id', bikes.destroy);
	app.delete('/api/bikes', bikes.theNuclearOption);

	app.get('/api/users', users.retrieveAll);
	app.post('/api/users/login', users.login);
	app.post('/api/users', users.create);
	app.delete('/api/users', users.theNuclearOption);

	app.all("*", (req, res, next) => {
		res.sendfile(resolve("./public/dist/index.html"));
	})

};
