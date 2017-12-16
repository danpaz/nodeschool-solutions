const http = require('http');
const port = process.argv[2];

http.createServer((req, res) => {
  if (req.method !== "POST") res.end();
  const data = [];
  req.on("data", (d) => data.push(d.toString().toUpperCase()))
  req.on("end", () => res.end(data.join('')))
}).listen(port);

