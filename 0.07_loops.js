//Loops

//do while loops
/* lcv = 0
	do {
		lcv = lcv + 1
	} while ([true || false])
*/ 

// ++ (increase by 1), -- (decrease by 1)
// += [number] (increase incrementally by [number]), -= [number] (decrease incrementally by [number])

 lcv = 0
 do {
 	lcv = lcv + 1
 	console.log(lcv);
 } while (lcv < 5);

lcv = 0;
do {
  lcv = lcv + 2 //lcv += 2
  console.log(lcv)
} while(lcv < 20);

lcv = 10;
do {
  lcv = lcv - 1 //lcv--
  console.log(lcv)
} while(lcv > 0);

//while loops (while _____ is true, run the code)
var counting = 0;

while (counting < 50) {
	counting += 5;
	console.log(counting);
}

var num = 10;
while (num > 0) {
	num--
	if (num == 0){
		console.log("Blast off!");
	} else {
		console.log(num)
	}
}

for (apples = 0; apples < 10; apples++) {
	console.log(apples);
}

for (i = 0; i<=20; i+=2){
	console.log(i)
}

var user = {
	username: "Archer",
	password: "guest",
	isLoggedIn: function() {
		return user.username + " is logged in."
	}
}
console.log(user.isLoggedIn());