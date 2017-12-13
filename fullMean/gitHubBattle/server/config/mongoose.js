const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const dbname = 'gitHubBattle';

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://localhost/${dbname}`, {useMongoClient: true}, () => console.log(`Connected to ${dbname} database...`));

const models_path = path.resolve(__dirname, '..', 'models');

fs.readdirSync(models_path).forEach(file => {
  if(/\.js$/.test(file)) {
    require(`${models_path}/${file}`);
    console.log(`Importing ${file}...`);
  }
});