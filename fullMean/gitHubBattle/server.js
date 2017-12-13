const express = require('express');
const bodyParser = require('body-parser');

const app = express();

require('./server/config/mongoose');
require('./server/config/routes')(app);
require('./server/config/middleware')(app);

app.listen(8000, () => console.log("We're live on port 8000..."));