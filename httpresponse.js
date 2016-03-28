 var fs = require('fs');
 var http = require('http');
 http.get('http://www.google.ba/index.html', (res) => {
  console.log(`Got response: ${res.statusCode}`);
  // consume response body
  res.resume();
}).on('error', (e) => {
  console.log(`Got error: ${e.message}`);
});