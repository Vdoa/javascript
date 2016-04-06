var http = require('http');
var querystring = require('querystring');
// ovo je body - kad je get on se ne šalje nikako.

function createUser (firstName, lastName, DOB, gitUsername){
		var postData = querystring.stringify({
		 // 'firstName' : 'Lejla',
		 // 'lastName' : 'VRAZALICA',
		 // 'DOB' : '2000-03-20',
		 //'gitUsername' : 'Leki'
		  'firstName' : firstName,
		  'lastName' : lastName,
		  'DOB' : DOB,
		  'gitUsername' : gitUsername
		});
		//var id = 7;

		var options = {
		  hostname: 'www.sule.io',
		  port: 1337,
		  path: '/user',
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length': postData.length
		  }
		};

		var req = http.request(options, (res) => {
		  console.log(`STATUS: ${res.statusCode}`);
		  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
		  res.setEncoding('utf8');
		  res.on('data', (chunk) => {
			console.log(`BODY: ${chunk}`);
		  });
		  res.on('end', () => {
			console.log('No more data in response.')
		  })
		});

		req.on('error', (e) => {
		  console.log(`problem with request: ${e.message}`);
		});

		// write data to request body
		req.write(postData);
		req.end();
}
console.log(createUser('Lejla','Vrazalica','2000-03-20','Leki'));
