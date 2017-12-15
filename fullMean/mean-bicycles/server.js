'use strict'
//Import Dependencies
//Initialize express
const express = require('express');
const app = express()
const session = require('express-session');

//DB stuff
require('./server/utils/mongoose');

//Start customized middleware
require('./server/utils/middleware')(app)

// Route and route logic
require('./server/utils/routes')(app)


app.listen(1337, function () {
	console.log('We are live on 1337...');
})
