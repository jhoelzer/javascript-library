//arrays
//					0		   1	  2			3		4
var students = ["Harrison", "Rose", "Ben", "Caitlyn", "Kay"];
console.log(students);
console.log(students[2]);

students[5] = "Nick";
console.log(students);

students.push("Aaron");
console.log(students);

students.pop();
console.log(students);

//for each (or for in) loop
//	   index	array
for (var s in students) {
	console.log(students[s]);
	console.log(students[s] + " is in the position of: " + s);
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var a in numbers) {
	console.log(numbers[a])
}

// empty arrays can be filled by user input or just later on
var empty = [];

empty.push("numbers", 1, 2, 3);
console.log(empty);

var numArray = []
for (var num = 1; num < 11; num++) {
	console.log(num);
	numArray.push(num);
	console.log(numArray);
}
console.log(numArray);

var hobbies = ["gaming", "art", "reading", "movies and TV"];
console.log(hobbies);

var coolCar = ["Ford Mustang Cobra", "Lambougini Diablo", "Dodge Charger"];
console.log(coolCar);

var diff = [1, 2, 3, 4, 5]
for (var num in diff) {
	console.log(num)
}

////////////////////////////////////////////////////////////

// nested arrays (arrays within an array)
var lswh = [[1, "cat", 7, 15, "A"],[2, "dog", 36, 12, "E"],[3, "rat", 42, 9, "I"],[4, "cow", 11, 40,"O"],[5, "bug", 0, 8, "U"]]
console.log(lswh[0][3])

var ta = [[1, 2, 3, 4, 5], ["cat", "dog", "rat", "cow", "bug"], [7, 36, 42, 11, 0], [15, 12, 9, 40, 8], ["A", "E", "I", "O", "U"]]
console.log(ta[0][3])

for (var i in ta) {
	for (var n in ta[i]) {
		console.log(ta[i][n])
	}
}

// Math.floor() = returns the largest integer that is less than or equal to a given number
//Math.random() = returns a pseudo-random number in the range of 0 (inclusive) - 1 (exclusive)
var random1 = Math.floor(Math.random() * 50) + 1;
function randomNum() {
	return Math.random();
}
console.log(random1);


///////////////////////////////////////////////////////////////////////////////

// Number.isInteger() = determines whether the passed value (in the "()") is an integer
var primeNum = [1, 31, 12, 49, 109, 35, 72, 13, 99, 234, 11, 25, 14, 7, 67];
var pickPrime = primeNum[Math.floor(Math.random() * primeNum.length)]
console.log(pickPrime)
function isPrime(number) {
	if (typeof number !== 'number' || !Number.isInteger(number)){
		return false;
	}
	if (number < 2) {
		return false;
	}
	else if (number === 2 || number === 3 || number === 7) {
		return true;
	} else if (number % 2 === 0) {
		return false;
	}
	for (var i = 3; i * i <= number; i +=2) {
	if (number % i === 0) {
		return false;
	} else if (number % 3 === 0 || number % 5 === 0 || number % 7 === 0) {
		return false;
	} else {
		return true;
	}
}
}
console.log(isPrime(pickPrime))


///////////////////////////////////////////////////////

// Math.ceil() = returns the smallest integer greater then or equal to a given number
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}
var alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var rand = [];
var word = "";

// concat() = used to join 2+ strings
// push() = adds new items to the end of an array, and returns the new length
for (bet =0; bet < 5; bet++) {
	for (lett = 0; lett < 5; lett++) {
		word = word.concat(alph[(getRandomInt(1, 27) - 1)]);
	}
	rand.push(word);
	word = "";
}
console.log(rand);