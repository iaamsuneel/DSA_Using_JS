/* Why is currying useful in JavaScript?
It helps us to create a higher-order function
It reduces the chances of error in our function by dividing it
 into multiple smaller functions that can handle one responsibility.
It is very useful in building modular and reusable code
It helps us to avoid passing the same variable multiple times
It makes the code more readable.
Currying can be used to handle asynchronous operations,
 in which functions return the promises.
 */
// How to achieve currying in JavaScript?
/* Using the closures function
Using the bind() method */

// without curring
function add(x, y, z) {
	return x + y + z;
}
//console.log(add(4, 5, 6)) // 15
// using curring
function addNew(x) {
	return function (y) {
		return function (z) {
			return x + y + z;
		};
	};
}
console.log("using Curring function--->", addNew(2)(3)(4));
// Use Cases of Currying Functions

/* 
   1. Partial Application:-
 This is useful when you need 
to reuse a function with the same initial parameters multiple times. */
function add(a) {
	return function (b) {
		return a + b;
	};
}
const addFive = add(5);
console.log(addFive(3)); // Outputs: 8
console.log(addFive(10)); // Outputs: 15
console.log(addFive(200)); // Outputs: 205

// infinite curring in JavaScript
/* function add(a) {
	return function (b) {
		if (b !== undefined) {
			return add(a + b);
		}
		return a;
	};
}
console.log(add(2)(3)(9)(29)(2424)()); */
