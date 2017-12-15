const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Connect to mongoose, Overwrite mpromise, mongoose's deprecated promise implementation
const DBNAME = 'bikes';
mongoose.connect(`mongodb://localhost/${DBNAME}`, {useMongoClient: true}, () => console.log(`Connected to ${DBNAME}...`));

mongoose.Promise = global.Promise

let models_path = path.join(__dirname, './../models')
console.log(models_path);
fs.readdirSync(models_path).forEach(function (file) {
	if(file.indexOf('.js') >= 0){
		console.log(models_path+'/'+file);
		require(models_path+'/'+file)
	}
})
