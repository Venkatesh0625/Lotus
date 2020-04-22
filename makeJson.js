const uniqid = require('uniqid');
const fs = require('fs');

saveData = (data, chunk) => {
    var _id = uniqid();
    var _size = data.length;

    toStore = {
        _id,
        _size,
        chunk,
        data
    };

    fs.appendFile('file-'+_id+'.json',JSON.stringify(toStore, undefined, 4),(err) => {
        if(err) {
            return console.log('Error',err);
        }
        return console.log('Stored successful')   ;
    });
}

module.exports = {
    saveData
}

