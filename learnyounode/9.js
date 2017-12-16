const http = require('http');
const urls = process.argv.slice(2);

let done = 0;
let data = [];
urls.forEach((url, idx) => {
  data[idx] = [];
  http.get(url, (res) => {
    res.on('data', d => data[idx].push(d.toString()));
    res.on('end', () => {
      done++
      if (done === urls.length) {
        data.forEach((d) => console.log(d.join('')));
      }
    })
  })
})
