const http = require('http');

// create a server using http
const server = http.createServer(function(req,res){

  res.writeHead(200, {'Content-Type': 'text/plain'});

  res.end("welcome to my server");
});

// create port
server.listen(4000, '127.0.0.1');

console.log("I just created a server!");