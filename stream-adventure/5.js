var split = require('split');
var through = require('through2');
var tr = through(write);
var count = 0;

function write (line, enc, next) {
  var fn = ++count % 2 == 0 ?  'toUpperCase' : 'toLowerCase';
  this.push(line.toString()[fn]() + '\n');
  next();
}

process.stdin
  .pipe(split())
  .pipe(tr)
  .pipe(process.stdout);
