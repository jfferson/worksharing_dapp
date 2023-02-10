var Tika = require('../lib/tika.js');
var tika = new Tika();

var parser = tika.parse('test.txt');

parser.on('text', function(data) {
  console.log("Full text for this document:");
  console.log(data);
});
