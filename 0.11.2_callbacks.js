/* callback: a callback function is a function passed into another function as an argument, which is then
	invoked inside the outer function to complete some kind of routine or action */

var fs = require('fs');

function getBirds(filepath, done) {
	fs.readFile(filepath, function(err, birds) {
		if (err) return done(err);

		fs.readFile('011_birds.dictionary', function(err, dict) {
			if (err) return done(err);
				compareBirds(birds, dict);
		})
	})
	var compareBirds = function (birds, dict) {
		dict = dict.toString().split('\n');
		birds = birds.toString().split('\n').filter(function(birds) {
			return dict.indexOf(birds) !== -1
		})
		done(birds);
	}
}


getBirds('011_birds.txt', function(birds) {

	console.log(birds);
});