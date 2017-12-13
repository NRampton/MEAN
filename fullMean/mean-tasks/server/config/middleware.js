const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(express.static(path.resolve(__dirname, '..', '..', 'public', 'dist')));
}