//Example 1: Using a Temporary Variable
var a = 3, b = 4
//create a temporary variable
let temp;
//swap variables
temp = a;
a = b;
b = temp;
console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

//Example 2: Using es6(ES2015) Destructuring assignment
//using destructuring assignment
[a, b] = [b, a];
console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

//Example 3: Using Arithmetic Operators
// addition and subtraction operator
a = a + b;
b = a - b;
a = a - b;
console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);