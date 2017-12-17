var http = require('http');
var through = require('through2');

var tr = through(write);
function write (buf, enc, next) {
  this.push(buf.toString().toUpperCase());
  next();
}

var server = http.createServer(function (req, res) {
  req.pipe(tr).pipe(res);
});

server.listen(process.argv[2]);
