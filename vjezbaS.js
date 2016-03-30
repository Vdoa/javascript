var prviArray = [1,5,6,10];
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
	var nadjiduple = dupli(Array1,Array2);
	//console.log(nadjiduple)
	for (cnt =0; cnt<nadjiduple.length; cnt++){
		Array1.splice(Array1.indexOf(nadjiduple[cnt]),1); //pronalazi index po vrijednosti u array-u
	    Array2.splice(Array2.indexOf(nadjiduple[cnt]),1);
	}
	var skupa = Array1.concat(Array2.concat(nadjiduple));
	console.log(skupa);
	return skupa;
}
var brissi1 = unija(prviArray,drugiArray);
console.log(brissi1)

function printArray(array){
	
	for(var i = 0; i < array.length; i++){
		console.log("[" + i + "]\t" + array[i] );
	}
	
}

printArray(unija(prviArray,drugiArray));
