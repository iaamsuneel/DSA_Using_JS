/*Immediately Invoked Function Expression
IIFE used to avoid polluting the global scope
Used mostly in library/framework code */
//Example 1: Here’s a basic example of an IIFE
(function () {
    var str = "Hello i am IIFE ";
    console.log("Example 1-->", str);
})();

//Example 2: Here’s another example of an IIFE that stores and display result.
const res = (function () {
    let x = 3,
        y = 4;
    return x + y;
})();
console.log("Example 2-->", res);
// IIFEs are commonly used to create private scope in JavaScript,
//allowing variables and functions to be encapsulated and
//inaccessible from outside the function.
// Example 3: Here’s an example demonstrating
//how an IIFE can be used to create private variables:
var counter = (function () {
    var count = 0;
    return {
        increment: function () {
            return count++;
        },
        decrement: function () {
            return count--;
        },
        getCount: function () {
            return count;
        },
    };
})();
// Increment the counter
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCount()); // Output: 3
// Trying to access the private count variable directly
console.log(counter.count); // Output: undefined (cannot access private variable)
