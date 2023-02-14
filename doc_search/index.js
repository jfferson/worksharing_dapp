'use strict'

var text;

var run = require('sync-runner');

const searchFile = (file, search) => {

  let text = run("java -jar lib/tika-app-2.7.0.jar --help")
  //const parser = java.importClass('org.apache.tika.parser');

    // all code bellow using Tika was considering "node-tika" package, that I decided to avoid
    // in favour of running Tika on java directly, it is there just for future refference
	//var Tika = require('node-tika');
	//var conversor = new Tika();

	//var Search_OP = require("flexsearch");

	//var search_index = new Search_OP.Index();

	//file = ( conversor.text(file,null, function(err, text) { return text; }) );
	/*var parser = conversor.parse(file);
	parser.on('text', function(data) {
  		file = data;
	});*/

	//search_index.add(file);
	//return search_index.search(search);

   return text;
}

module.exports = {searchFile};

var file = (process.argv[1]);
var search = (process.argv[2]);

console.log( searchFile(file,search) );
