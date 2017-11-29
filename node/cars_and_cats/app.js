var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response) {
  console.log(request.url);
  if (request.url === '/cars') {
    fs.readFile('./views/cars.html', 'utf8', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    })
  } else if (request.url === '/cats') {
    fs.readFile('./views/cats.html', 'utf8', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    })
  } else if (request.url === '/cars/new') {
    fs.readFile('./views/new_car.html', 'utf8', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents),
      response.end();
    })
  } else if(request.url === '/stylesheets/styles.css'){
    fs.readFile('./stylesheets/styles.css', 'utf8', function(errors, contents){
     response.writeHead(200, {'Content-type': 'text/css'});
     response.write(contents);
     response.end();
    })
  }
 else if (request.url ==='/images/bender.jpeg') {
    fs.readFile('./images/bender.jpeg', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  } else if (request.url ==='/images/brock.jpg') {
    fs.readFile('./images/brock.jpg', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  } else if (request.url ==='/images/munsters.png') {
    fs.readFile('./images/munsters.png', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'image/png'});
      response.write(contents);
      response.end();
    })
  } else if (request.url ==='/images/earthakitt.jpg') {
    fs.readFile('./images/earthakitt.jpg', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  } else if (request.url ==='/images/stevens.jpg') {
    fs.readFile('./images/stevens.jpg', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  } else if (request.url ==='/images/muppet.jpg') {
    fs.readFile('./images/muppet.jpg', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  } else {
      response.writeHead(404);
      response.end("Couldn't find the file!");
  }
})

server.listen(7077);
console.log("Goliath online.")
