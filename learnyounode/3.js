const fs = require('fs');
const file = fs.readFileSync(process.argv[2]).toString();
const lines = file.split('\n').length - 1;
console.log(lines);
