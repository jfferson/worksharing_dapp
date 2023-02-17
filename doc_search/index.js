'use strict'

var run = require('sync-runner');
var Search_OP = require("flexsearch");

function searchFile (file, search){

  let text = run(`java -jar lib/tika-app-2.7.0.jar -t ${file}`);

  const text_lines = text.split("\n");
  let search_index = new Search_OP.Index();

  for (let i =0; i < text_lines.length; i++ ) search_index.add((i+1),text_lines[i]);

  return search_index.search(search);
}

module.exports = {searchFile};

var file = (process.argv[2]);
var search = (process.argv[3]);

console.log( searchFile(file,search) );
