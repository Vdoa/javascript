//console.log(process.argv);
var sum = 0;
for(var i = 2; i < process.argv.length; i++){
	//radi ovo od pozicije 2 pa dok ne bude manje od dužine naredbe na comand liniji (node process.js 1 2 3)
    sum += parseInt(process.argv[i]); // parseInt pretvara string u broj!
	//sum = sum + Number(process.argv[i]); //može i ovako
}
console.log(sum);