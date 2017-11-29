var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response) {
  console.log('client request URL: ', request.url);
  if (request.url === '/') {
    fs.readFile('index.html', 'utf8', function(errors, contents) {    //NB: the encoding parameter here is vital
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.write('Also here you go.');
      response.end();
    });
  } else if (request.url === '/styles.css') {
    fs.readFile('styles.css', 'utf8', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/css'});
      response.write(contents);
      response.end();
    });
  } else {
    response.writeHead(404);
    response.end('File not found!!!');
  }
})

server.listen(6789);
console.log('Running in localhost at port 6789');
