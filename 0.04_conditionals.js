	// greater than (>), less than (<)
	// greater than or equal to (>=), less than or equal to (<=)
	// equal to (==), strictly equal to (===)
	// not (!), not equal to (!=)

	console.log(10 != 10); // false
	console.log(1 < 3); // true

	var name = "Jenny";

	console.log(name == "jenny"); // false (not the same; different capitalization)
	console.log(name == "Jenny"); // true
	console.log(name = "jenny"); // true, but not for the right reasons; the single "=" 
								 //has the program overwrite the previous definition of "name"

console.log(6 == "6"); // true
console.log(6 === "6"); // false; same character but different datatypes


// if (boolean expression) {
//
//}

if (242 % 2 === 0) {
	console.log("This number is even.")
}

var username = "admin"
var password = "test123"

if (username == "admin" && password == "test123") {
	console.log("You have been granted access!")
} else {
	if (username != "admin" && password != "test123") {
		console.log("Access denied. Incorrect username and password.")
	} else if (password != "test123") {
		console.log("Access denied. Password incrorrect.")
	} else if (username != "admin") {
		console.log("Access denied. Incorrect username.")
	} else {
		console.log("This part shouldn't run. If it does, either I fucked up or you're a wizard.")
	}
}

var age = 24;

if (age >= 35) {
	console.log("You can vote and also hold any place in government office.");
} else if (age >= 25) {
	console.log("You can vote and run for senate.");
} else if (age >= 18) {
	console.log("You can vote.");
} else {
	console.log("You're shit outta luck.")
}

var coltsWins = -3;

if (coltsWins >= 4) {
	console.log("The Colt's won " + coltsWins + " games." + "Derpy ponies FTW.");
} else if (coltsWins == 3) {
	console.log("The Colt's won " + coltsWins + " games." + "3/4 ain't bad.");
} else if (coltsWins == 2) {
	console.log("The Colt's won " + coltsWins + " games." + "Both Colts and Patriots suck equally.");
} else if (coltsWins == 1) {
	console.log("The Colt's won " + coltsWins + " games." + "Not exactly suprised.");
} else {
	console.log("The Colt's won " + coltsWins + " games." + "That seems about right.")
}


//fizzbuzz
var num = 1;

while (num < 101) {
	console.log(num);
		
		if (num % 3 === 0 && num % 5 === 0) {
			console.log("Fizzbuzz");
		} else if (num % 5 === 0){
			console.log("buzz");
		} else if (num % 3 === 0) {
			console.log("Fizz");
		} else {
			console.log(num);
		}
	num = num + 1;
}
