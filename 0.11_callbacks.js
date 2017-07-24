var fs = require('fs');
//fs = file system; err = error
// the bulls.dictionary file is named .dictionary to separate it from the regular .txt

/*
Callback diagram
	callbacks = once something is done, go back and run the function (?)

	request = prepare_the_request();
	send_request_asynchronously (request, function(response) {
		display(response);
	});
*/

// [function]([path], [callback])
function getBulls(filepath, done) {
	// Telling file system to read a file that the user of the function passes into as a
		// argument. Then we are creating a callback to handle that case
	fs.readFile(filepath, function(err, bulls) {
		// error handling below; check for errors early
		if (err) return done(err);
			// no need to put in {} since there is no option other than "if"
		fs.readFile('011_bulls.dictionary', function(err, dict) {
			if (err) return done(err);
			// do some logic here
				compareBulls(bulls, dict);
		})
	})
	// variable way of writing functions
	var compareBulls = function (bulls, dict) {
		// turn the items from these files into arrays then split them up
		dict = dict.toString().split('\n');
		bulls = bulls.toString().split('\n').filter(function(bulls) {
			// going over the dictionary then checking if the bulls are located inside of the dictionary
				// if it is, then it's returning that value
			// .split('\n') = splits array into strings at every new line in the array
			return dict.indexOf(bulls) !== -1
			// -1 is used to make sure the program doesn't run past the end of the array
		})
		done(bulls);
	}
}


getBulls('011_bulls.txt', function(bulls) {

	console.log(bulls);
});

// check on command prompt with C:\Users\hoelz\Desktop\JavaScript\js_fundamentals>node .\011_callbacks.js
	// returns [ 'jordan\r', 'pipen\r' ]


// another type of callback
console.log("Hey, what's your name?")
var printNameInThreeSeconds = setTimeout(function() {
	console.log("Bryce");
}, 3000);
// prints out the name in 3 seconds (continues to do other things; in this case, completes the getBulls part of code)
console.log("Nice to meet you!");