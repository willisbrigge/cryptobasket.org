var fs = require('fs');
var path = require('path');

var dir = "_posts";

fs.readdir(dir, function (err, files) {
    files.forEach(function (file) {
        console.log(file);
        var oldPath = dir + '/' + file;
        var newPath = dir + '/' + file.replaceAll(" ", "__").toLowerCase();
        fs.rename(oldPath, newPath, function (err) {
            if (err) throw err;
        });
    });
});

