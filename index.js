/**
* Created with Node Primer.
* User: bhalperin
* Date: 2014-04-27
* Time: 03:12 PM
* To change this template use Tools | Templates.
*/

// Load the core http module.
var http = require("http"),
    port = +process.argv[2];

// Create a new server that always responds with a text file
// containing "Hello World"
var server = http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello World\n");
});

// Start the server on port 3000
server.listen(3000);

// Print out a nice message so you know that the server started
console.log("Server running on port 3000");
