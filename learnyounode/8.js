const http = require('http');
const url = process.argv[2];

http.get(url, (res) => {
  let data = [];
  res.on('data', d => data.push(d.toString()));
  res.on('end', () => {
    console.log(data.join('').split('').length)
    console.log(data.join(''))
  })
})
