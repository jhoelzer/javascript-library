// declaring the void function
function greeting() {
	var name = "Patrick";
	console.log(name + ", the fairies are coming! " + name + "! " + name.toUpperCase() + "!");
}

// calling the void function
greeting();

function weather() {
	console.log("Are you blind? It's sunny!");
}
weather();

var inWeather = "Too hot, too sunny, too stormy. You can't win in Indy."
function weatherIN() {
	console.log(inWeather);
}
weatherIN();

//void functions with parameters
function clothes(footwear) {
	console.log("Oh my God! These aren't my " + footwear + "! WHO'S " + footwear.toUpperCase() + " ARE THESE!?!");
}
clothes("shoes");

function add(num1, num2) {
	console.log(num1 + num2);
}
add(34, 66);

//functions that return data
function sum(num1, num2) {
	return num1 + num2;
}
var answerQuestion = sum(23, 17);
console.log(answerQuestion);

function sub(num1, num2) {
	return num1 - num2;
}
var answerQuestion = sub(37, 17);
console.log(answerQuestion);

function mult(num1, num2) {
	return num1 * num2;
}
var answerQuestion = mult(12, 6);
console.log(answerQuestion);

function divide(num1, num2) {
	return num1 / num2;
}
var answerQuestion = divide(99, 11);
console.log(answerQuestion);

function mod(num1, num2) {
	return num1 % num2;
}
var answerQuestion = mod(100, 33);
console.log(answerQuestion);

//write a function with 2 strings as arguments
function derp(word1, word2) {
	console.log(word1 + " " + word2)
}
derp("herp", "derp");

function bills(water, power, credit, medical) {
	return water + power + credit + medical;
}
var total = bills(100, 100, 342, 35);
console.log("Your bills this month come to a total of: $" + total);

function cost(price, amount, tax) {
	return (price * amount) + ((price * amount) * (tax / 100));
}
var amount = 100;
var cavities = cost(0.99, 100, 7);
console.log(amount + " Cokes will cost you $" + cavities + ". I can hear your dentist crying.");

//create a calculator function that accepts 3 arguments, 2 numbers and 1 operator
function calcFunc(num1, op1, num2) {
	if (op1 == "+") {
		return num1 + num2;
	} else if (op1 == "-") {
		return num1 - num2;
	} else if (op1 == "*") {
		return num1 * num2;
	} else if (op1 == "/") {
		return num1 / num2;
	} else if (op1 == "%") {
		return num1 % num2;
	} else {
		console.log("Not an operator.")
	}
}
var calc = calcFunc(14, "/", 2);
console.log(calc + " minutes!")