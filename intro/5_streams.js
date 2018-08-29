// Writable Stream - send data to a stream
// Readable Stream - read data from a stream
// Duplex Stream - can do both

var http = require('http')
var fs = require('fs')

/*  myReadStream is an emitter
    it emits an event called "data" whenever a chunk of data is read */
var myReadStream = fs.createReadStream(__dirname + '/README.md', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/WRITEME.md');

myReadStream.on('data', function(chunk){
    console.log('new chunk received');
    myWriteStream.write(chunk);
})
