var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var items = [8,11,13]
//console.log(duzina);

function findItems(array,item){
	var trazeno = [];
	for (i=0;i<item.length+1;i++){
		for (ind1=0; ind1 < array.length;ind1++){
			for (ind2=0;ind2<array[ind1].length; ind2++){
				if (array[ind1][ind2].length==3){
					for (ind3=0; ind3<array[ind1][ind2].length; ind3++){
						if (array[ind1][ind2][ind3]==item[i]){
							trazeno.push(array[ind1][ind2][ind3]);
						}
					}
	
				}
				else {
					if (array[ind1][ind2]==item[i]){
							trazeno.push(array[ind1][ind2]);
					}
				}
					
		   
			}
			
		}	
	}
	
	return trazeno;
}
var poziv = findItems(myArray,items);
function printArray(array){
	
	for(var i = 0; i < array.length; i++){
		console.log(array[i] );
	}
	
}
printArray(poziv);
//console.log(poziv);



