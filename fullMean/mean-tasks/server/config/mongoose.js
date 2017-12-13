const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const dbname = 'mean-task';

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://localhost/${dbname}`, {useMongoClient: true}, () => console.log(`Connected to ${dbname}...`));

const models_path = path.resolve(__dirname, '..', 'models');

fs.readdirSync(models_path).forEach(file => {
  if(/\.js$/.test(file)) {
    require(`${models_path}/${file}`);
  }
})