var fs = require('fs');
var jsonexport = require('jsonexport');

const reader = fs.createReadStream('./translated.json');
const writer = fs.createWriteStream('./jsonexportOut.csv');

reader.pipe(jsonexport()).pipe(writer);
