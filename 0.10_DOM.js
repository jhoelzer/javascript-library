// // DOM = Document Object Model
// alert("Happy Friday!");
// var con = confirm("Yes or no?")
// if (con == yes) {
// 	con
// }

///

function Hotel(name, rooms, booked) {
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvailability = function () {
		return this.rooms - this.booked;
	};
}
var rri = new Hotel("Red Roof Inn", 250, 230);
var alex = new Hotel("The Alexander", 500, 150);
var hotels = [rri, alex];
function showAllHotelsInfos

//////////

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

console.log(jw.checkAvailability());
console.log(jwExp.checkAvailability());
console.log(stayBridge.checkAvailability());
console.log(hilton.checkAvailability());

// creating array of hotels
var hotels = [jw, jwExp, stayBridge, hilton];
// grabbing the name from one of the hotels
// console.log(hotels[1].name);

function showAllHotelsInfo(){
	for (var h in hotels) {
		var hotelName = hotels[h].name;
		var hotelHtmlText = document.createTextNode(hotelName);
		// createTextNode: holds code/data temporarily
		var listItem = document.createElement("li");
		listItem.appendChild(hotelHtmlText);
		document.getElementByID("hotels").appendChild(listItem);
//		console.log(hotels[h].name);
	}
}
showAllHotelsInfo();