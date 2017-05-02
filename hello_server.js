var http = require('http');
var port = 3000;

var server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>Hello Node!</h1>');
    response.end();
});

server.listen(port, function() {
    console.log(`Server running at http://localhost:${port}`);
});