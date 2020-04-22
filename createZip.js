const fs = require('fs');
const path = require('path')
const zip = require('adm-zip');

//Creating archive
var createZip = (files, nPart) => {
    if(files) {
        var dataArr = Array()
            , zipBuffer
            , length
            , eachSize;

        var zipFile = new zip(); 

        files.forEach(file => {
            
            var fileStat = fs.statSync(file);
            var location = path.resolve(file);

            if(fileStat.isDirectory()) {
                zipFile.addLocalFolder(location);
            } else if(fileStat.isFile()) {
                zipFile.addLocalFile(location);
            }
        });
        
        zipBuffer = zipFile.toBuffer().toString();
        length = zipBuffer.length;
        eachSize = Math.ceil(length / nPart);
        console.log(typeof zipBuffer, zipBuffer.length)
        for(i = 0;i < length; i+=eachSize) {
            dataArr.push(zipBuffer.slice(i,i+eachSize));
        }
        dataArr.push(length - length % eachSize);
        return dataArr;
    }   
}

var x = createZip(["./node_modules"],5);
for(i=0;i<x.length;i++) {
    console.log(x[i].length);
}