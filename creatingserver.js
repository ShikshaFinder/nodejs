var http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); //   http header
  res.write('bye World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the 