const fs = require('fs');
const walk = require('walk');

var t = () => {
    var directory = "./node_modules";
    var walker = walk.walk(directory);
   
    var fileList;
    var _root  = directory;
    walker.on("file", function (root, fileStats, next) {
        if(root == _root) {
            fileStats.fileList
        }
            console.log(root);
            next();
        });
   
    walker.on("end", function () {
        return fileList;
    });
};
