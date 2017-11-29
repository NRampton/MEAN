var express = require('express');
var app = express();

app.get('/', function(request, response) {
	response.send("<h1>Hello Express</h1>");
})

app.listen(8000, function() {
	console.log("Goooooooood morning port 8000!");
})
