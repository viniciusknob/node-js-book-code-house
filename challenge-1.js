var http = require('http');
var urlParser = require('url');
var fs = require('fs');

var port = 3000;

var server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});

    var url = urlParser.parse(request.url, true);
    if(/\/(article)?$/.test(url.pathname)) {
        write('/article.html', response);
    } else if(/\/contact$/.test(url.pathname)) {
        write('/contact.html', response);
    } else {
        if (/\.ico$/.test(url.pathname)) {
            console.log(`Asset ${url.pathname} required`);
        } else {
            write('/error.html', response);
        }
    }
});

var write = function(resource, response) {
    var location = __dirname + resource;

    var exists = fs.exists(location, function(exists) {
        console.log('Resource '+resource+(exists?'':' not')+' found');
    });

    fs.readFile(location, function(error, html) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(html);
    });
};

server.listen(port, function() {
    console.log(`Server running at http://localhost:${port}`);
});