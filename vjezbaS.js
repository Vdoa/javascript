var prviArray = [1,5,6,10,5];
var drugiArray = [5,10,12,2,21];

var dupli = function (ar1,ar2) {
	var ar3 =[];
	for (count =0; count<ar1.length; count++){
		for (broji=0; broji<ar2.length; broji++){
		if (ar1[count]==ar2[broji]) {
		ar3.push(ar2[broji]);	
		} 
		}
	}
return ar3;

}

//console.log(nadjiduple);
var unija = function (Array1,Array2){
	var nadjiduple = dupli(Array1,Array2); // ova poziva ovu gore koja će naći duple u ova dva arry-a -> [5,10]
	//console.log(nadjiduple)
	for (cnt =0; cnt<nadjiduple.length; cnt++){ // kad nadje duple to će biti array određene dužine.
		Array1.splice(Array1.indexOf(nadjiduple[cnt]),1); //briše(splice) ali kad nađe index od prvo broja 5 u prvom array pa 10-naredba .indexOf(5) će naći index petice
	    Array2.splice(Array2.indexOf(nadjiduple[cnt]),1); //briše(splice) ali kad nađe index od prvo broja 5 u drugom array pa 10-naredba .indexOf(5) će naći index petice
	}
	var skupa = Array1.concat(Array2.concat(nadjiduple));
	//console.log(skupa);
	return skupa;
}
console.log(prviArray);
console.log(drugiArray);
var brissi1 = unija(prviArray,drugiArray); // ovo je ustvari glavna funkcija koja poziva sve ostale 
console.log(brissi1);

function printArray(array){
	
	for(var i = 0; i < array.length; i++){
		console.log("[" + i + "]\t" + array[i] );
	}
	
}

//printArray(unija(prviArray,drugiArray));
printArray(brissi1);