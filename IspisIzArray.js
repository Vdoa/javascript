var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var items = [8,11,13]
//console.log(duzina);

function findItems(array,item){
	var trazeno = [];
	for (i=0;i<item.length+1;i++){
		for (ind1=0; ind1 < array.length;ind1++){
			//console.log(array[3][2]);
			for (ind2=0;ind2<array[ind1].length; ind2++){
				//console.log(array[ind1][ind2]);
				//console.log(array[ind1].length);
				
				if (array[ind1][ind2]=item[i]){
					trazeno.push(array[ind1][ind2]);
					console.log(array[ind1][ind2]);
					//return trazeno;
					//console.log(trazeno);
				}
		   
			}
		}	
	}
	return trazeno;
}
var poziv = findItems(myArray,items);
//console.log(poziv);



