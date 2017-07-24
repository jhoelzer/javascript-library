// integers = numbers without quotation marks
		// a number with quotation marks is a string
console.log(24);
console.log(1992);
console.log(2015);
console.log(1);

console.log(10 % 3);
console.log(11 % 3);
console.log(1000 % 19);

// NaN = not a number
		// if it's not a number (ex: "a", "1") = true
		// if it is a number (ex: 1 (no "")) = false
		var gummyworm = "gummy worm"
if (isNaN(gummyworm)) {
	gummyworm = true
} else {
	gummyworm = false
}
console.log("Is it true that \"gummy worm\" is not a number? -> " , gummyworm);