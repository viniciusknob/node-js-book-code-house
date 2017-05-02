var http = require('http');
var url = require('url');
var port = 3000;

var server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});

    response.write('<h1>Query String Data:</h1>');
    var result = url.parse(request.url, true);
    for (var key in result.query) {
        response.write('<h2>'+key+': '+result.query[key]+'</h2>');
    }

    response.end();
});

server.listen(port, function() {
    console.log(`Server running at http://localhost:${port}`);
});