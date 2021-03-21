function makeMultiplier (multiplier) {
	this.test = 1;
	console.log (this);
	function myMultiplier (x) {
		return x * multiplier;
	};
	return myMultiplier;
};

var executeOperation = function (x, operation) {
	return (operation(x));
};


console.log ('before');;
var multiplyBy3 = makeMultiplier (3);
console.log ('after' + this.test);
console.log (multiplyBy3(4));
console.log (executeOperation(5, multiplyBy3));

var facebook = new Object();
facebook.ceo = new Object();
facebook.ceo.name = 'mark';
facebook.color = 'blues';
console.log (facebook);


/*L48, constructors, this en prototype */
function Circle (radius) {
	this.radius = radius;
};

Circle.prototype.opp = function () {
	return Math.PI * Math.pow (this.radius, 2);
};

var myCircle = new Circle (10);
console.log (myCircle);
console.log (myCircle.opp ());

/* L49 Object literals en the this keyword */
var circleLit = {
	radius : 10,
	opp : function () {
		var self = this;
		var doubleRadius = function () {
			self.radius = 20;
		}
		doubleRadius ();
		return Math.PI * Math.pow (this.radius, 2);
	}
}
console.log (circleLit.opp ());

/* L52 namespaces and IIFE*/
(function (window) {
	var name = 'Yaakov';
	var Yaakovgreeting = {};
	Yaakovgreeting.greeting = function () {
		console.log ('Hi ' + name);
	};	
	window.Yaakovgreeting = Yaakovgreeting;
}
)(window);


(function (window) {
	var name = 'John';
	var Johngreeting = {};
	Johngreeting.greeting = function () {
		console.log ('Hi ' + name);
	};	
window.Johngreeting = Johngreeting;
}
)(window);

Yaakovgreeting.greeting ();
Johngreeting.greeting ();