'use strict'

  const mvn = require('node-java-maven');

  const java = require('java-bridge');

  function exec_debug(result){
    console.log(`classpath debug: ${result}`);
  }

  function error_exec_debug(){
    console.log("error on classpath debug");
  }

  mvn(function(err, mvnResults) {
    if (err) {
      return console.error('could not resolve maven dependencies', err);
    }
    mvnResults.classpath.forEach(function(c) {
      console.log('really adding ' + c + ' to classpath? more testing ahead');
      java.classpath.append(c);
    });
  })/*.then(function(){ // why it does not work?
    console.log("waited");
  });*/

  //var classpath_values = (java_string(classpath)).split(java_file.pathSeparator); // ignore

  /*for (let i in classpath_values){ // ignore
    console.log("mais teste de classpath: "+i);
  }*/

const searchFile = (file, search) => {

  const java_file = java.importClass('java.io.File');
  const java_system = java.importClass('java.lang.System');
  const java_string = java.importClass('java.lang.String');

  var classpath = java_system.getProperty("java.class.path");
  
  console.log("that testing ahead: "+( classpath.then(exec_debug, error_exec_debug) ) );

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

   return "I should be the last output";
}

module.exports = {searchFile};

var file = (process.argv[1]);
var search = (process.argv[2]);

console.log( searchFile(file,search) );
