var fs = require('fs');

var readingSync = function(file) {
    console.log("Reading sync...");
    var init = new Date().getTime();
    fs.readFileSync(file);
    var end = new Date().getTime();
    console.log("Sync lock: " + (end - init) + "ms");
};

module.exports = readingSync;