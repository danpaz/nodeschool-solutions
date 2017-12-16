const fs = require('fs');
const [path, ext] = process.argv.slice(2, 4);

fs.readdir(path, (err, files) => {
  files
    .filter(name => name.endsWith(`.${ext}`))
    .map(name => console.log(name));
});
