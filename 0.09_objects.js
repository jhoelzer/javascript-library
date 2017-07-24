//Objects

var empObject = {}

//object literal
var johnQualls = {
//  key			value
	name		: "John Qualls",
	age			: 50,
	hairColor	: "brown hair"
}
console.log(johnQualls);
console.log(johnQualls.name)
console.log(johnQualls.name + " has " + johnQualls.hairColor + " and is about " + johnQualls.age + " years old.")

console.log(johnQualls.height)
johnQualls.height = "6"
console.log(johnQualls.height)


var animal = {
	species : "Great Blue Heron",
	type    : "bird",
	weight : "4.0 to 7.9",
	commonInIndiana : "common",
	habitat : "ponds and wetlands"
}
console.log(animal["habitat"]);
console.log("The " + animal.species + " is a " + animal.weight + " pound " + animal.type + " that is a relatively " 
			+ animal.commonInIndiana + " sight in Indiana " + animal.habitat + ".")

animal.species = "moose";
console.log(animal.type);
// change weight using [] notation
// add new array property of movies about me: rocky and bullwinkle, monty python, national lampoons vacation
animal.weight = 600;
animal.type = "mammal"
animal.moviesAboutMe = ["Rocky & Bullwinkle", "Monty Python", "National Lampoon's Vacation"];

console.log(animal);
console.log(Object.keys(animal));
console.log("The " + animal.species + " is a " + animal.weight + " pound " + animal.type + " that is a relatively " 
			+ animal.commonInIndiana + " sight in Indiana " + animal.habitat + "." + 
			" There are several pop-culture references about moose, such as in " + animal.moviesAboutMe + ".");

/////////////////////////////////////////////////////

// Objects with methods

var theBryceIsRight = {
	name		: "Bryce Green",
	age			: 55,
	vocation	: "TA",
	email		: "theBryceIsRight@gmail.com",
	greeting	: function () {
		console.log("Greetings, Earthlings, I am " + this.name + " and I am here to learn you.")
		// can also use "return" instead of console.log; nesting multiple console.logs is bad practice
		// "this" refers to the object it is located in
	},
	contactMe	: function () {
		return "My email is '" + this.email + "'."
	},
	doBoth : function() {
		console.log(this.greeting());
		console.log(this.contactMe());
	}
}
console.log(theBryceIsRight);
theBryceIsRight.greeting();
theBryceIsRight.doBoth();

//object constructors
var paul = new Object;
paul.name = "Paul O'Connor";
paul.vocation = "Curriculum Master";
paul.hobbies = ["coding", "listening to music", "baking"]


function Hotel(name, rooms, booked) {
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvailability = function () {
		if (this.rooms - this.booked === 0) {
		return "There are no rooms available at " + this.name + "."
		} else if (this.rooms - this.booked === 1) {
			return "There is 1 room available at " + this.name + "."
		} else {
			return "There are " + (this.rooms - this.booked) + " rooms available at " + this.name + "."
		}
	}
}

// the "new" keyword helps us initiate a new object
var jw = new Hotel("JW Marriot", 300, 250);
var jwExp = new Hotel("Mini JW", 100, 75);
var stayBridge = new Hotel("Stay Bridge", 200, 199);
var hilton = new Hotel("Hilton", 350, 350);

console.log(jw.checkAvailability())
console.log(jwExp.checkAvailability())
console.log(stayBridge.checkAvailability())
console.log(hilton.checkAvailability())

// creating array of hotels
var hotels = [jw, jwExp, stayBridge, hilton]
// grabbing the name from one of the hotels
console.log(hotels[1].name);

for (var h in hotels) {
	console.log(hotels[h].name)
}

///////////////////

function person (name, age, weight) {
	this.name = name;
	this.age = age;
	this.weight = weight;
	this.burn = function () {
		return this.name + " is " + this.age + " and " + this.weight + "!"
	}
}

var mom = new person("Your mother", "so old she married a neanderthal", "so fat that she's legally required to beep like a truck when backing up");
var child = new person("Burn Victim", "24 years old", "weighs 120 pounds");
child.height = "short"
console.log(mom.burn());
console.log(child.burn() + " Burn Victim is also very " + child.height + ".");

/////////////////

// compareShows : function(person2) {
//		for (var i in favoriteShows) {
//			for (var j in person1.favoriteShows) {
//				if (favoriteShows[i] == person2.favoriteShows[j]) {
	//				console.log(favoriteShows[i])
//}
//
//}
//}
//}

var person1 = {
	name		: "A",
	age			: 23,
	favoriteShows : ["Person of Interest", "Grimm", "Criminal Minds", "Law and Order", "The Following"],
	birthday	: function () {
		return this.age + 1;
	},
	compareShows : function(person2) {
		for (var i in this.favoriteShows) {
			for (var j in person2.favoriteShows) {
				if (this.favoriteShows[i] == person2.favoriteShows[j]){
					console.log(favoriteShows[i])
				} else {
					console.log("No shows in common.")
				}
			}
		}
	}
}
console.log("My name is " + person1.name + ", I am " + person1.age + " years old, and my favorite TV shows are " 
	+ person1.favoriteShows[0] + ", " + person1.favoriteShows[1] + ", " + person1.favoriteShows[2] + ", " 
	+ person1.favoriteShows[3] + ", and "+ person1.favoriteShows[4] + ".");
console.log("On my next birthday, I will be " + person1.birthday() + " years old.")

var person2 = {
	name		: "B",
	age			: 14,
	favoriteShows : ["Person of Interest", "Grimm", "Once Upon a Potato", "Grey's Anatomy", "Agents of Shield"],
	birthday	: function () {
		return this.age + 1
	}
}
console.log("My name is " + person2.name + ", I am " + person2.age + " years old, and my favorite TV shows are " 
	+ person2.favoriteShows[0] + ", " + person2.favoriteShows[1] + ", " + person2.favoriteShows[2] + ", " 
	+ person2.favoriteShows[3] + ", and "+ person2.favoriteShows[4] + ".");
console.log("On my next birthday, I will be " + person2.birthday() + " years old.")

var person3 = {
	name		: "C",
	age			: 45,
	favoriteShows : ["Person of Interest", "CSI", "Criminal Minds", "Law and Order", "Supernatural"],
	birthday	: function () {
		return this.age + 1;
	}
}
console.log("My name is " + person3.name + ", I am " + person3.age + " years old, and my favorite TV shows are " 
	+ person3.favoriteShows[0] + ", " + person3.favoriteShows[1] + ", " + person3.favoriteShows[2] + ", " 
	+ person3.favoriteShows[3] + ", and "+ person3.favoriteShows[4] + ".");
console.log("On my next birthday, I will be " + person3.birthday() + " years old.")

var person4 = {
	name		: "D",
	age			: 36,
	favoriteShows : ["Person of Interest", "Grimm", "Fullmetal Alchemist", "Timeless", "The Following"],
	birthday	: function () {
		return this.age + 1;
	}
}
console.log("My name is " + person4.name + ", I am " + person4.age + " years old, and my favorite TV shows are " 
	+ person4.favoriteShows[0] + ", " + person4.favoriteShows[1] + ", " + person4.favoriteShows[2] + ", " 
	+ person4.favoriteShows[3] + ", and "+ person4.favoriteShows[4] + ".");
console.log("On my next birthday, I will be " + person4.birthday() + " years old.")

var person5 = {
	name		: "E",
	age			: 24,
	favoriteShows : ["Person of Interest", "Grimm", "The Mentalist", "Legion", "Supernatural"],
	birthday	: function () {
		return this.age + 1;
	}
}
console.log("My name is " + person5.name + ", I am " + person5.age + " years old, and my favorite TV shows are " 
	+ person5.favoriteShows[0] + ", " + person5.favoriteShows[1] + ", " + person5.favoriteShows[2] + ", " 
	+ person5.favoriteShows[3] + ", and "+ person5.favoriteShows[4] + ".");
console.log("On my next birthday, I will be " + person5.birthday() + " years old.")