var fs = require('fs'); //'fs' je libery vidi na web-u

//fs.readFile(process.argv[2],function name(err, data){
//console.log(data.toString().split("\n").length -1);	
//})
//console.log("evo me ovde");

// ovo je forma za čitanje ali da ne čeka dok ta naredba bude završena
// ovaj kod će prvo izbaviti string "evo me ovdje" pa onda broj koji
// je rezultat readFile. 
// u ovoj varijanti naredbe dobijeno pretvara u string, pa broji nove linije 



fs.readFile(process.argv[2],'utf8',function name(err, data){
if (err) throw err;	
//console.log(data.toString().split("\n").length -1);	
console.log(data.split("\n").length -1);	
})
//console.log("evo me ovde");

// ovo je forma za čitanje ali da ne čeka dok ta naredba bude završena
// ovaj kod će prvo izbaviti string "evo me ovdje" pa onda broj koji
// je rezultat readFile. 
// 