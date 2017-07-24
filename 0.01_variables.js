// Act as storage containers for data that can be used multiple times

// You can add variables together

// Numbers cannot be at the start of a variable name

// there are several “reserved words”: don’t use these for variable names:
	// abstract, boolean, break, byte, case, catch, char, class, const, continue, debugger, default, delete,
	// do, double, else, enum, export, extends, false, final, finally, float, for, function, goto, if, implements,
	// import, in, instanceof, int, interface, let, long, native, new, null, package, private, protected, public,
	// return, short, static, super, switch, synchronized, this, throw, throws, transient, true, try, typeof,
	// var, void, volitile, while, with


var name = "Jenny";
// var [declaration] = [initialization]
// declaration: var name;
// initialization: name = "Jenny"

console.log(name);
// console.log() is used to print to the console so you can view it; variables and strings can go between ()

var lastName = "Hoelzer";
//concatenation = joining character strings end to end
console.log(name + " " + lastName);

var street = "Fake Street";
var state = "IN";
var zip = "12345";

console.log(street + ", \n" + state + " " + zip);
// "\n" tells the computer to add a break

// the following would return an error without the \
console.log("She said \"hello\"");
// "\" tells the computer not to use what follows as it normally would

//whitespace is the part of the code made up of "unnecessary" spaces (between words and between lines 
//(spacebar spaces and enter spaces)) that will not be read when the code is run (it's just there so 
//human eyes can read the code)
		// some spaces are necessary (such as the space between "var" and the variable name)

//booleans = comparisons
var isAwake = true;
if (isAwake = true) {
	isAwake = "5 more minutes..."
} else {
	console.log("...")
}
var rainy = false;

console.log("Are you awake? " + isAwake);
console.log(rainy);

// % = modulus; finds remainder
console.log("The answer to 10 % 3 is: ", 10 % 3);
	// comma separates the 2 parts of the code into 2 arguments; using + combines them into 1 argument and 
	//makes the whole thing a string

var one = 1;
var two = 2;
var three = 3;
var four = 4;
var five = 5;

console.log(one, two, three, four, five);

// Operators = addition (+), subtraction (-), multiplication (*), division (/), modulus (%), and
		// assignment (=)
var myNumber = 0;

console.log(myNumber + 10);
console.log(myNumber + 10 - 1);
console.log(((myNumber) + (10 - 1)) * 9);
console.log(((myNumber) + (10 - 1)) * (9 / 7));


var myAge = 24;
var maxAge = 100;
var perDay = 2;
var supply = ((maxAge - myAge) * 365 * 2)

console.log("You will need " + supply + " cookies to last you until the ripe old age of " + maxAge + ".")