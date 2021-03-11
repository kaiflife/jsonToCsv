var fs = require('fs');
var jsonexport = require('jsonexport');
var csv = require('csv-parser');

module.exports = {
  translateFields(jsonPath, csvPath, fileName) {
    const reader = fs.createReadStream(jsonPath);
    const writer = fs.createWriteStream(`./${fileName}.csv`);

    const headers = [];

    fs.createReadStream(csvPath)
      .pipe(csv())
      .on('data', (data) => {
        for(let name in data) {
          headers.push(name);
        }
      })
      .on('end', () => {
        console.log(headers);
      });

    let result;

    reader.pipe(jsonexport({headers})).pipe(writer);
    return result;
  }
}
