const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
var app = express();

app.use(bodyParser.json());

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes');
routes_setter();

app.listen(8000, () => {
  console.log("Online.");
})

