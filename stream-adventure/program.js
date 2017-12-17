

var through = require('through');
var split = require('split');
var i = 0;

process.stdin
    .pipe(split())
    .pipe(through(function (line) {
        if (i%2 === 0) {
          console.dir(line.toString().toLowerCase());
        } else {
          console.dir(line.toString().toUpperCase());
        }
        i++;
    }))
    .pipe(process.stdout)
;
