let http = require("http"); // require() function: include a module
// now application has access to the HTTP module, and is able to create a server

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end('{"key": "value"}');
  })
  .listen(8080);
