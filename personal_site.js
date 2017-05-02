var http = require('http');
var fs = require('fs');
var port = 3000;

var server = http.createServer(function(request, response) {
    fs.readFile(__dirname + '/index.html', function(error, html) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(html);
        response.end();
    });
});

server.listen(port, function() {
    console.log(`Server running at http://localhost:${port}`);
});