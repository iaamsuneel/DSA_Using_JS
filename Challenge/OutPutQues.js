("1.Question");
/* function sayHi() {
	console.log(name);
	console.log(age);
	var name = "Lydia";
	let age = 21;
}

sayHi(); */
//
("2.Question");
/* carName = "Volvo";
var carName;
console.log(carName); // Volvo
carName = "Volvo";
let carName; */
//console.log(carName); //  ReferenceError: Cannot access 'myLet' before initialization
//carName = "Volvo";
/* const carName;
console.log(carName); // code will not run */
/* const shape = {
	radius: 10,
	diameter() {
		return this.radius * 2;
	},
	perimeter: function () {
		console.log(this, "--->");
		return 2 * this.radius;
	},
};
console.log("1=>", shape.diameter());
console.log("rrr", shape.perimeter()); */
("3.Question");
/* let c = { greeting: "Hey!" };
let d = { ...c, title: "new List" };
//d = c;
d.greeting = "Hello";
console.log(d.greeting);
console.log(c, d); */

("4.Question");
/*  let a = 3;
let b = new Number(3);
let c = 3;
console.log(a == b);
console.log(a === b);
console.log(b === c);  */

("5.Question");
const num = parseInt("7*2");
console.log(num); // 7

("6.Question");
const arr = [1, 2, 3];
const res = arr.map((num) => {
	if (typeof num === "number") return;
	return num * 2;
});
console.log(res); // [ undefined, undefined, undefined ]
