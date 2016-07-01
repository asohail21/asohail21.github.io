//JS File
console.log("Hello World");


function add(x,y){
	console.log(x + y);
}

add(3,4);

function legalAge(age){

}
		
var classmates = ["Matt", "Tara", "Danielle", "Evan"];
for(var j=0; j < classmates.length; j++){
	console.log(classmates[j]);
}

var typesofSoda = new Array();
typesofSoda[0] = "Red Cream Soda";
typesofSoda[1] = "IBC";

console.log(typesofSoda);
console.log(classmates);

for(var i in classmates){
	console.log(classmates[i]);
}

var mixedTypeArray = ["Elephan", 100, (5>2)];
var sameType = ["Elephant", "Giraffe", "Duck"];


var randomNumberArray ="" 



[65,63,56,74,32,12,15,17,90,100];
function silver(repeat){
	for(var i =0; i < randomNumberArray.length; i++){}
}





/*****DO NOT GO ABOVE THIS LINE RIGHT NOW*******************************/
/*************************THERE IS TOO MUCH "FUN" ABOVE************************/


//OBJECT LITERAL
var friend = {
	//Properties
	fullname      : "",
	age           : 0,
	married       : true,
	vocation      : "",
	yearsKnown    : 0,
	closeLikeABrother : true,
	//Method
	printVocation     : function()
	{
	return this.vocation;
	},
	postMessageToWall : function(message){
		return message;
	},
	introduceToSisterInLaw   : function(){
		if(this.yearsKnown >= 5 && this.closeLikeABrother ==true && this.married ==true){
			return "I want you to meet Lizzy.";
		} else {
			return "Have you tried Tinder?";
		}
	}
}

// var nickKirkes = Object.create(friend);
// nickKirkes.fullname = "Nick Kirkes";
// nickKirkes.age =38;
// nickKirkes.married = false;
// nickKirkes.vocation = "Project Manager at Sales Force";

// var hansKloepfer = Object.create(friend);
// hansKloepfer.fullname = "Hans Kloepfer";
// hansKloepfer.age= 42;
// hansKloepfer.married = false;
// hansKloepfer.vocation = "Sailboat Captain";


//var triciaFactora = Object.create(friend);
var triciaFactora = Object.create(friend);
triciaFactora.fullname = "Tricia Factora";
triciaFactora.age = 21;
triciaFactora.married = false;
triciaFactora.vocation = "student";
triciaFactora.yearsKnown = 6;
triciaFactora.closeLikeABrother = true;

