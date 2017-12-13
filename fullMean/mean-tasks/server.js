const express = require('express');

const app = express();

require('./server/config/middleware.js')(app);
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, () => console.log("We're live on 8000..."))