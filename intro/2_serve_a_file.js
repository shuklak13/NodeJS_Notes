var http = require('http');
var fs = require('fs');     // access the file system
http.createServer(function (req, res) {
    // err - an error if demo.html doesn't exist
    // data - the content of the demo.html file
    fs.readFile('resources/demo.html', function(err, data) {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);
// go to localhost:8080 to see the demo.html file inyour browser