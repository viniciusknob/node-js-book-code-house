var http = require('http');
var fs = require('fs');
var readingAsync = require('./reading_async');
var readingSync = require('./reading_sync');

var nodeFile = "./node.exe";
var stream = fs.createWriteStream(nodeFile);
var download = "http://nodejs.org/dist/latest/node.exe";

http.get(download, function(response) {
    console.log("Downloading Node.js...");

    response.on('data', function(data) {
        stream.write(data);
    });

    response.on('end', function() {
        stream.end();
        console.log("Download completed!");
        readingAsync(nodeFile);
        readingSync(nodeFile);
    });
});