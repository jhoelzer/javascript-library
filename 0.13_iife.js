/*
iife = immediately-invoked function expression
	declares/defines and runs function at the same time
	semicolons are VERY important for these

*/

// if you want to add a variable here, be sure to put a semicolon after it, otherwise it won't run
(function printNum() {
	var a = 5;
	console.log(a);
})();

/*
compared to:

function printName() {
	var name = "John";
	console.log(name);
}
printName();

*/

// create an iife that counts from 1 - 10

(function count() {
	for (var i = 1; i <= 10; i++)
		console.log(i);
})();

//////////////////////////

//print out car mpg
var smartCar = {}
var smartCarMPG = function(totalMiles, totalGallons) {
	return {
		calculateMpg : function() {
			console.log("MPG: ");
			return totalMiles / totalGallons;
		}
	};
};

smartCar.mpg = smartCarMPG(750, 15);
console.log(smartCar.mpg);
console.log(smartCar.mpg.calculateMpg());

///////////////

//challenge: create an iife that prints out the product of 2 numbers


(function multiply() {
	console.log(13 * 21)
}());

// OR

(function multiply2(num1, num2) {
	console.log(num1 * num2)
})(13, 21);