var fs = require('fs');

var readingAsync = function(file) {
    console.log("Reading async...");
    var init = new Date().getTime();
    fs.readFile(file);
    var end = new Date().getTime();
    console.log("Async lock: " + (end - init) + "ms");
};

module.exports = readingAsync;