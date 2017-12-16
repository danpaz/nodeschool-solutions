const fs = require('fs');
const http = require('http');
const [port, file] = process.argv.slice(2, 4);

http.createServer((req, res) => {
  fs.createReadStream(file).pipe(res);
}).listen(port);
