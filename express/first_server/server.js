var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', function(request, response) {
	response.send("<h1>Hello Express</h1>");
})

app.get("/users", function(request, response){
	var users_array = [
		{name: "Michael", email: "michael@codingdojo.com"}, 
		{name: "Jay", email: "jay@codingdojo.com"}, 
		{name: "Brendan", email: "brendan@codingdojo.com"}, 
		{name: "Andrew", email: "andrew@codingdojo.com"}
	];
	response.render('users', {users: users_array});
})

app.get("/users/:id", function(request, response) {
	console.log("The user id requested is: ", request.params.id);
	response.send("You requested the user with id: " + request.params.id);
})

app.listen(8000, function() {
	console.log("Goooooooood morning port 8000!");
})
