var fs = require('fs');
var path = require('path');

<<<<<<< HEAD
var filtered = [];

fs.readdir(process.argv[2], (err, list) => {
    if(err) throw err;
    for(var i = 0; i<list.length; i++){
        if(path.extname(list[i]) == "."+ process.argv[3]){
            filtered.push(list[i]);
            console.log(list[i]);
        }
    }
})
=======
var filtered =[]

fs.readdir(process.argv[2], (err, list) => {
	if(err) throw err;
	//console.log(list); 
	for(var i =0; i<list.length; i++){
		
		if(path.extname(list[i])=="." + process.argv[3]){
		filtered.push(list[i]);
		console.log(list[i]);	
		}
	}
	console.log(filtered);	
})
// da bi nam izlistao sve jpg file u folderu (npr.)muzika u konzolu unijeti :node listing.js c:\muzika jpg
>>>>>>> d43cf491defc0b8ae93818a43e1e4e6a99220d65
