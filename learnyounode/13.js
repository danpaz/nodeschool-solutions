const http = require('http');
const url = require('url');
const port = process.argv[2];

http.createServer((req, res) => {
  const {path, query} = url.parse(req.url, true);
  if (/^\/api\/parsetime\?iso\=/.test(path)) {
    const date = new Date(query.iso);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    }));
  } else if (/^\/api\/unixtime\?iso\=/.test(path)) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      unixtime: new Date(query.iso).getTime()
    }));
  } else {
    res.end("404");
  }
}).listen(port);

