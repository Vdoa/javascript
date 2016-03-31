var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog",3]);
console.log(myArray);
myArray.pop();
myArray.push(["tiger",7]);
myArray.shift()
console.log(myArray);
myArray.unshift(["Pero",25]);
console.log(myArray);
//var indd=myArray.indexOf("cat", 0);
//console.log(indd);
function getIndexOf(array,what){
	var inddx =[];
	for(i=0;i<array.length;i++){
		for (n=0;n<array[i].length;n++){
			if (array[i][n]==what){
			inddx.push([i,n]);
				//console.log(i);
				//console.log(n);
			return inddx;	
			}
		} 
		
	}
	
}
var ddd = getIndexOf(myArray,"cat");
console.log(ddd);



var nArray=[4, 3, 2, 5, 8, 3, 6, 10];
nArray.sort(function(a, b){return a-b});
console.log(nArray);
