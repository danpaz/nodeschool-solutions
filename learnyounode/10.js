const net = require('net');

net.createServer((socket) => {
  const date = new Date();
  socket.end(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}\n`);
}).listen(process.argv[2]);
