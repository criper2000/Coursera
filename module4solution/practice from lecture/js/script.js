 ///// ***** String concatination
// var string = "Hello";
// // string += " World";
// string = string + " World";
// console.log(string + "!");

// math operators //
// console.log((5 + 4) /3);
// console.log(undefined / 5);
// 	function test1 (a) {
// 		console.log(a / 5);
// 	}
// test1();

//equality
// var x = 4, y = 4;
// if (x == y) {
// 	console.log("x=4 is equal to y=4");
// }

// x = "4";
// 	if (x == y) {
// 		console.log("x='4' is equal to y=4");
// 	}

// //strict equality
// if (x === y) {
// 	console.log("Strict: x='4' is equal to y=4")
// }
// else {
// 	console
// 	.log("Strict: x='4' is NOT equal to y=4");
// }


// // If statement (all false)
// if ( false || null ||
// 	undefined || "" || 0 || NaN) {
// 	console.log("This line won't ever execute");
// }
// else {
// 	console.log ("All false");
// }

// //If statement (all true)
// if (true && "hello" && 1 && -1 && "false") {
// 	console.log("All true");
// }

//Best practice for {} style
//curly brace on the same line or next
//just a style?
// function a()
// {
// 	return
// 	{
// 		name: "Yaakov"
// 	};
// }

// function b() {
// 	return {
// 		name: "Yaakov"
// 	};
// }
// console.log(a());
// console.log(b());

//for loop
// var sum = 0;
// for (var i = 0; i < 10; i++) {
// 	console.log(i);
// 	sum = sum + i;
// }
// console.log("sum of 0 through 9 is: " + sum);

// function orderChickenWith(sideDish) {
// 	sideDish = sideDish || "whatever!";
// 	console.log("Chicken with " + sideDish);
// }

// orderChickenWith("noodles");
// orderChickenWith();

//* var message = "in global";
//console.log("global: message = " + message);

//var a=function () {
//	var message = "inside a"
//	console.log("a: message = " + message);
//	b();
//}

//function b () {
//	console.log("b: message = " + message);
//}

//a();

//should be undefined
//var x;
//console.log(x);
//if (x == undefined) {
//	console.log("x is undefined");
//}

//x=5;
//if (x == undefined) {
//	console.log("x is undefined");
//}
//else {
// 	console.log("x has been defined")
// }

//object creation
// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";

// console.log(company);
// console.log("Company CEO name is: "
//  + company.ceo.firstName);

// console.log(company["name"]);
// var stockPropName = "Stock of company";
// company[stockPropName] = 110;
// console.log("Stock price is: " + company[stockPropName]);

//better way: object literal
// var facebook = {
// 	name: "Facebook",
// 	CEO: {
// 		firstName: "Mark",
// 		favColor: "blue"
// 	},
// 	"stock of company": 110
// };

// console.log(facebook.CEO.firstName)

//functions are first class data types
//functions are objects
// function multiply(x, y) {
// 	return x * y;
// }

// multiply.version = "v.1.0.0";
// console.log(multiply.version);

// //functiopn factory
// function makeMultiplier(multiplier) {
// 	var myFunc = function (x) {
// 		return multiplier * x;
// 	};
// 	return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));

// //passing functions as arguement
// function doOperationOn(x, operation) {
// 	return operation(x);
// }

// var result = doOperationOn(5, multiplyBy3);
// console.log(result);
// result = doOperationOn(100, doubleAll);
// console.log(result);


// Copy by reference vs by value
// var a = 7;
// var b = a;
// console.log("a: " + a);
// console.log("b: " + b);

// b = 5;
// console.log("after b update:");
// console.log("a: " + a);
// console.log("b: " + b);

// var a = { x: 7 };
// var b = a;
// console.log(a);
// console.log(b);

// b.x = 5;
// console.log("after b.x update: ");
// console.log(a);
// console.log(b);

// //Pass by reference vs by value
// function changePrimitive(primValue) {
// 	console.log("in changePrimitive...");
// 	console.log("before:");
// 	console.log(primValue);

// 	primValue = 5;
// 	console.log("after:");
// 	console.log(primValue);
// }

// var value = 7;
// changePrimitive(value); //primValue = value
// console.log("after changePrimitive, orig value");
// console.log(value);

// function changeObject(objValue) {
// 	console.log("in changeObject...");
// 	console.log("before:");
// 	console.log(objValue);

// 	objValue.x = 5;
// 	console.log("after:");
// 	console.log(objValue);
// }

// value = { x: 7};
// changeObject(value); //objValue = value
// console.log("after changeObject, orig value:");
// console.log(value);

// function test () {
// 	console.log(this);
// 	this.myName = "Ya";
// }
// test();
// console.log(window.myName);

// //function constructors
// function Circle (radius) {
// //first	console.log(this);
// //instead
// 	this.radius = radius;
// }
// Circle.prototype.getArea =
// 	function () {
// 		return Math.PI * Math.pow(this.radius, 2);
// 	};


// var myCircle = new Circle(10); //new Object ()
// console.log(myCircle);

// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle);

// //object literals and "this"
// var literalCircle = { //same as new object()
// 	radius: 10,

// 	getArea: function () {
// 		console.log(this);
// 		return Math.PI * Math.pow(this.radius, 2);
// 	}
// };

// console.log(literalCircle.getArea());

//Arrays
// var array = new Array();
// array[0] = "Yaakov";
// array[1] = 2;
// array[2] = function (name) {
// 	console.log("Hello " + name);
// };
// array[3] = {course: " HTML, CSS & JS"};

// console.log(array);
// array[2](array[0]);
// console.log(array[3].course);

// //short hand array creation
// var names = ["Yaakov", "John", "Joe"];

// for (var i = 0; i < names.length; i++) {
// 	console.log("Hello " + names[i]);
// }

// var names2 = ["Yaakov", "John", "Joe"]; 

// var myObj = {
// 	name:"Yaakov",
// 	course: "HTML/CSS/JS",
// 	platform: "Coursera"
// };
// for (var prop in myObj) {
// 	console.log(prop + ": " + myObj[prop]);
// }

// for (var name in names2) {
// 	console.log("Hello " + names2[name]);
// }

// names2.greeting = "Hi!";

// for (var name in names2) {
// 	console.log("Hello " + names2[name]);
// }

// //Closures
// function makeMultiplier (multiplier) {
// 	//var mutliplier = 2;
// 	function b() {
// 		console.log("Multiplier is: " + multiplier);
// 	}
// 	b();


// 	return (
// 		function (x) {
// 			return multiplier * x;
// 		}

// 	);
// }

// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(10));
