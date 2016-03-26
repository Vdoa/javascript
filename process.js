//console.log(process.argv);
var sum = 0;
for(var i = 2; i < process.argv.length; i++){
	sum += parseInt(process.argv[i]);
	//console.log(sum); //prikaz korak po korak
}
console.log(sum)
// kad ukucamo naredbu "node c:\js\process.js 9 8 7 4  preskaæe text i sabira brojeve."