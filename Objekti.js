var house = {
    
    floors: 2,
    windows: 10,
    garage: true,
    isGarageOpen: true,
    owner: "Edin",
    location: "Ilidza",
<<<<<<< HEAD
    
=======
	
>>>>>>> d43cf491defc0b8ae93818a43e1e4e6a99220d65
    openGarage: function(isGarageOpen){
        if(isGarageOpen==true){
            console.log("It's already opened");
            return isGarageOpen;
        }
        else{
            isGarageOpen = true;
<<<<<<< HEAD
            return isGarageOpen;
        }
=======
			console.log("evo sad ću ih otvoriti!");
            return isGarageOpen;
			
        }
		
>>>>>>> d43cf491defc0b8ae93818a43e1e4e6a99220d65
    }
    
    
}
<<<<<<< HEAD

=======
var otvoriVrata = house.openGarage(false); // bez ove linije i linije ispod - kod nije pokazivao poruke za garažu.ZAŠTO?
console.log(otvoriVrata);    
>>>>>>> d43cf491defc0b8ae93818a43e1e4e6a99220d65
var array = [];
var broj = 3;
var nesto = function(){};
function nestodrugo(){};
<<<<<<< HEAD

=======
document.write(house.windows)
>>>>>>> d43cf491defc0b8ae93818a43e1e4e6a99220d65
// console.log(house.owner);
// house.owner = "Azra";
// console.log(house.owner);
// console.log(house.isGarageOpen);
// house.isGarageOpen = house.openGarage(house.isGarageOpen);
// console.log(house.isGarageOpen);
var kuca =  house;
kuca.owner = "Milica";
house.owner = "Edin";

console.log(house.owner);
console.log(kuca.owner);

