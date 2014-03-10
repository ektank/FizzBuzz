$(document).ready(function() {
	var i = 1;
	for (i = 1; i <= 100; i++) {
		if (i % 15 === 0) {
			$("body").append("FizzBuzz");
		} else if (i % 3 === 0) {
			$("body").append("Fizz");
		} else if (i % 5 === 0) {
			$("body").append("Buzz");
		} else {
			$("body").append(i);
		}
	}
});