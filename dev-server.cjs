const fs = require('fs'),
  http = require('http');

http.createServer(function (req, res) {
  fs.readFile(__dirname + req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }

    console.log("requested file", req.url, (/\.js$/.test(req.url)))

    if (/\.js$/.test(req.url)) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
    } else {
      res.writeHead(200);
    }
    res.end(data);
  });
}).listen(8080);