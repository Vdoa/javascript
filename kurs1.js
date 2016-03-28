var house = {
	floors: 2,
	windows: 10,
	garage: true,
	ifGarageOpen: false,
	owner: "Edin",
	location: "ilidza",
	
	openGarage: function openGarage(isGarageOpen) {
		if(isGarageOpen==true){
			concole.log("it's alredy opened");
		}
		else{
			isGarageOpen = true;
			return isGarageOpen;
		}
		
	}	
	
		
}
var array = [];
var nesto = function() {};
function nestodrugo(){};
console.log(house.owner);
house.owner = "Azra";
console.log(house.owner);
console.log(house.isGarageOpen);
house.isGarageOpen

