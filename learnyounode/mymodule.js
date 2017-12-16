const fs = require('fs');
module.exports = (dirname, ext, cb) => {
  fs.readdir(dirname, (err, files) => {
    if (err) {
      return cb(err);
    }
    const filtered = files.filter(name => name.endsWith(`.${ext}`));
    cb(null, filtered);
  });
}
