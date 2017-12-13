const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

module.exports = (app) => {
  app.use(bodyParser.json());
  // app.use(express.static(path.resolve(__dirname, '..', '..', 'public', 'dist')));
}