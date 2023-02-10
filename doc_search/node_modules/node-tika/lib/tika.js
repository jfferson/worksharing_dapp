var util   = require('util'),
    events = require('events'),
    spawn = require('child_process').spawn;

module.exports = Tika;

function Tika() {
  events.EventEmitter.call(this);
}

// inherit events.EventEmitter
Tika.super_ = events.EventEmitter;

Tika.prototype = Object.create(events.EventEmitter.prototype, {
  constructor: {
  value: Tika,
  enumerable: false
}
});

Tika.prototype.parse = function(fileName) {
  var that = this;
  var tika = spawn('java', ['-jar', __dirname + '/tika-app-1.0.jar', '-t', fileName]);

  // set up a variable on per instance scope for storing text
  tika.stdout.parse_text = '';

  tika.stdout.on('data', function (data) {
    // aggregate all output text from the parse
    this.parse_text += data;
  });

  tika.on('exit', function (code) {
    that.emit('text', this.stdout.parse_text);
  });

  tika.stderr.on('data', function (data) {
    that.emit('error', data);
  });

  return that;
}

