var through = require('through2');
var trumpet = require('trumpet');
var tr = trumpet();
var selector = tr.select('.loud');

selector.createReadStream()
  .pipe(through(function(buf, enc, next) {
    this.push(buf.toString().toUpperCase());
    next();
  }))
  .pipe(selector.createWriteStream())

process.stdin
  .pipe(tr)
  .pipe(process.stdout);
