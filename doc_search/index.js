'use strict'

const searchFile = (file, search) => {

	var Tika = require('node-tika');
	var conversor = new Tika();

	var Search_OP = require("flexsearch");

	var search_index = new Search_OP.Index();

	//file = ( conversor.text(file,null, function(err, text) { return text; }) );
	var parser = conversor.parse(file);
	parser.on('text', function(data) {
  		file = data;
	});

	search_index.add(file);
	return search_index.search(search);
}

module.exports = {searchFile};

var file = (process.argv[1]);
var search = (process.argv[2]);

console.log( (searchFile(file,search)) );
