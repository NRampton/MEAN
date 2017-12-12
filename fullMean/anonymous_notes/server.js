const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;
const app = express();

app.use(express.static(__dirname + '/public/dist'));
app.use(bodyParser.json());

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes')
routes_setter(app);

app.listen(port, () => console.log(`We're live on port ${port}...`));