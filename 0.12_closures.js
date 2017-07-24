/*
Closures = variables inside of functions that cannot be used outside of the function
	(variable only available for use in part of the code)
	essentially functions themselves
	encapuslate data so we are writing with intention
*/

// example (real thing wouldn't be this redundant)
var init = function() {

	var name = "Summer";
	
	function displayName() {
		console.log(name);
	}
	displayName();
//closure above
}
init();

// trying to use the "name" variable outside of the above function causes an error (variable undefined)
		// console.log(name) wouldn't work here

var friend = {};

var setAge = function(myAge) {
	// here is the closure
	var birthday = "11/22/1992"
	return {
		getAge: function() {
			console.log(myAge);
			return myAge;
		}
	}
}

friend.age = setAge(24);
console.log(friend.age);
console.log(friend.age.getAge());
console.log(friend.birthday);

/*
var friend = {
	age = function() {
		//setting the age
		getAge()
		//return the age
	}
}
*/

//made function inside object, then put the object inside a function