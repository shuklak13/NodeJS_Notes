
var http = require('http');                 // import Node.js's http module
var uc = require('upper-case');             // import npm's upper-case module
var dt = require('./0a_datetimemodule');    // import my custom datetime module

// create a server
    // req, res = HTTP request and response objects
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    // write the date and time from datetimemodule
    res.write("The date and time are currently: " + dt.myDateTime());

    // end the response and send it
    res.end(uc('Hello World!'));
}).listen(8080);    // deploy at localhost:8080