/* Why is currying useful in JavaScript?
It helps us to create a higher-order function
It reduces the chances of error in our function by dividing it
 into multiple smaller functions that can handle one responsibility.
It is very useful in building modular and reusable code
It helps us to avoid passing the same variable multiple times
It makes the code more readable */
function add(x, y, z) {
	return x + y + z;
}
console.log(add(4, 5, 6));
function addNew(x) {
	return function (y) {
		return function (z) {
			return x + y + z;
		};
	};
}
console.log("using Curring function--->", addNew(2)(3)(4));
