var http = require('http');
var querystring = require('querystring');
function editUser (id,firstName,lastName,DOB, gitUserName){
		var putData = querystring.stringify({
			if (firstName === undefined){
			} else {
			   'firstName' : firstName,
			}
			if (lastName == undefined){
					
			} else {
			   'lastName' : lastName,
			}
			if (DOB == undefined){
					
			} else {
			   'DOB' : DOB,
			}
			if (gitUserName == undefined){
					
			} else {
			   'gitUserName' : gitUserName
			}
/* 			'firstName' : firstName,
			'lastName' : lastName,
			'DOB' : DOB,
			'gitUserName' : gitUserName */
		});

		//var id = 2;

		var options = {
		  hostname: 'www.sule.io',
		  port: 1337,
		  path: `/user/${id}`,
		  method: 'PUT',
		  headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length': putData.length
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
		req.write(putData);
		req.end();
}
console.log(editUser(19,'','VRAZALICA','','LEKI'));