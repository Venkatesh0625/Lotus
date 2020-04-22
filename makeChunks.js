const fs = require('fs');
var getChunks = (filename, nPart) => {
    var dataArray = Array();
    var zipData = fs.readFileSync(filename, (err) => {
        if(err) {
            return console.log('Cannot read file',err);
        }
        
    })
}