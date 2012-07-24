// Log node version
console.log('Node Version: %s', process.version);

// Process information
console.log('PID: %d running on %s %s', process.pid, process.arch, process.platform);

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

// Begin benchmark time using high-resolution real time 
var t = process.hrtime();

// Set a re-ocurring timer interval
intervalID = setInterval(intervalCB, 1000)
var count = 0;
function intervalCB() {
  console.log('\tInterval callback fired: %d', count);
  count++;
}

// Handle SIGINT
process.on('SIGINT', function() {
  console.log('Got SIGINT. Press Control-D to exit.');
});

// Create a timer on the next tick of the event loop
// that will 
process.nextTick(function () {
  setTimeout(function() {
    clearInterval(intervalID);
    console.log('Cleared re-occuring interval timer');

    t = process.hrtime(t);
    console.log('Benchmark took %d seconds and %d nanoseconds', t[0], t[1]);
  }, 5000);
});

// Print stack trace
console.log('Printing stack trace');
console.trace('Main Program');

// Require test library. Pass in directory name
var testLib = require('test-library'); 

testLib.on('ready', function() {
  console.log('Module test-library is ready.');
});


// Require mymod module
var myMod = require('mymod');
console.log('Loaded %s', myMod.name);
