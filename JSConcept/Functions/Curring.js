// 1. What is Currying function ?
// Currying is a function
// where a function that takes multiple arguments is transformed
// into a sequence of functions, each accepting a single argument.

// The curried function returns a new function for each argument
// until all arguments are collected, then executes the original function

/* Transform a function with multiple args into a chain of functions with one arg */

//  Why is currying useful in JavaScript?
// 1. Creates Higher-Order Functions
//    Currying breaks a function into a chain of functions.
//    Each function returns another function until all arguments are provided.
// Example:
function multiply(a) {
  return function (b) {
    return a * b;
  };
}
const double = multiply(2);
console.log(double(5)); // 10
// 2. Single Responsibility & Reduced Error
// Each function handles only one argument and one concern.
// Easier to test and debug.
// 3. Modular & Reusable Code
// Currying makes logic reusable for different use-cases.
const greet = (greeting) => (name) => `${greeting}, ${name}`;
const sayHello = greet("Hello");
console.log(sayHello("Suneel")); // Hello, Suneel
// 4. Avoid Repeating Same Variables
// Once a value is curried, you don’t need to pass it again.
function logWithPrefix(prefix) {
  return function (message) {
    console.log(`${prefix}: ${message}`);
  };
}
const errorLogger = logWithPrefix("ERROR");
errorLogger("Something went wrong"); // ERROR: Something went wrong
// 5.More Readable Code
// Each function is focused and small → improves readability and maintainability.
// 6.Supports Asynchronous Flow
// Currying can also return promises, great for chaining async functions.
const asyncStep = (val) => (next) => Promise.resolve(val + next);

asyncStep(10)(5).then(console.log); // 15

// How to achieve currying in JavaScript?
// 1. Using the closures function
// 2. Using the bind() method

// without curring
function add(x, y, z) {
  return x + y + z;
}
//console.log(add(4, 5, 6)) // 15

// using curring
// Using Closures (Manual Currying)
function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(curryAdd(1)(2)(3)); // 6
// Using bind()
function multiply(a, b) {
  return a * b;
}
const doubles = multiply.bind(null, 2); // preset 'a' to 2
console.log(doubles(5)); // 10

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
function addInfinite(a) {
  return function (b) {
    if (b !== undefined) {
      return add(a + b);
    }
    return a;
  };
}
console.log(addInfinite(2)(3)(9)(29)(2424)());

// General Curry Function
// To make any function curried:
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...nextArgs) => curried(...args, ...nextArgs);
    }
  };
}
// Example:
function sum(a, b, c) {
  return a + b + c;
}
const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6

// Ques
// asked Question in Cars24
function createCalculator() {
  let total = 0;
  return {
    add(a) {
      total += a;
      return this;
    },
    multiply(a) {
      total *= a;
      return this;
    },
    subtract(a) {
      total -= a;
      return this;
    },
    getTotal() {
      return total;
    },
  };
}
const calculates = createCalculator();
const results = calculates.add(10).multiply(5).subtract(30).add(10).multiply(2);
console.log(results.getTotal());
