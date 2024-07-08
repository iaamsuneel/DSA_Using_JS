// this is not a variable. It is a keyword. You cannot change the value of this
// in JavaScript, this keyword refers to an object  and also depending on how it is used
/* In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object. */

// 1. this in a method
// When used in an object method, this refers to the object.
// Create an object:
const person = {
	firstName: "John",
	lastName: "Doe",
	fullName: function () {
		return this.firstName + " " + this.lastName;
	},
};
console.log("-->", person.fullName());
// 2. this Alone
/* When used alone, this refers to the global object.
Because this is running in the global scope. */
let x = this;
console.log("this-->", this);

function value() {
	let a = 10;
	return this.a;
}

console.log("value-->", value);
