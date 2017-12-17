var through = require('through2');
var tr = through(write);

function write (buf, enc, next) {
  this.push(buf.toString().toUpperCase());
  next();
}

process.stdin.pipe(tr).pipe(process.stdout);
