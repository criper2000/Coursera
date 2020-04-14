(function (window) {
	var scottGreeter = {};
	scottGreeter.name = "Scott";
	var greeting = "Hello ";
	scottGreeter.sayHello = function () {
	console.log(greeting + scottGreeter.name);
}

	window.scottGreeter = scottGreeter;

	})(window);