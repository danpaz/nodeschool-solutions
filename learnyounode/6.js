const mymodule = require('./mymodule');
const [path, ext] = process.argv.slice(2, 4);

mymodule(path, ext, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.join('\n'));
  }
});
