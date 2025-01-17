/* closure :  closure is the combination of a function bundled together (enclosed)
              with references to its surrounding state (the lexical environment).

              1. A closure allows an inner function to access variables from 
                 its outer function even after the outer function has executed.
              2. This is possible because JavaScript functions
                 remember the lexical environment where they were created.  */

// Lexical scoping

// Example code 1:
function x() {
  var a = 7; // a is a local variable in the lexical scope of x
  function y() {
    // y() is the inner function, a closure
    console.log(a); // use variable declared in the parent function
  }
  y(); // Calling the inner function
}
x(); // Call the outer function

// Example code 2:
function outer() {
  var a = 5; // Variable in the outer function's scope
  function inner() {
    console.log(a); // Inner function accesses 'a'
  }
  return inner; // Return the inner function (not calling it yet)
}
var x = outer(); // Call 'outer' and store the returned function in 'x'
x(); // Output : 5 , Call the function stored in 'x'
outer()(); // Output : 5 , Call 'outer', immediately call the returned function

// Example code 3 :
function outer() {
  var a = 5; // `a` is initially 5
  function inner() {
    console.log(a); // `inner` references `a` from the outer function
  }
  a = 100; // The value of `a` is updated to 100
  return inner; // `inner` is returned, forming a closure
}
var x = outer(); // Call `outer` and assign the returned function to `x`
x(); // Invoke `x` (which is `inner`), logging the current value of `a`
// Example code 4 :
function outer(b) {
  function inner() {
    console.log(a, b);
  }
  let a = 50;
  return inner;
}
var x = outer("Hello");
x(); //50 "Hello"

//Closure Scope Chain

/* Every closure has three scopes:
Local Scope (Own scope)
Outer Functions Scope
Global Scope  */
// global scope
var e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}
const res = sum(10)(2)("3")(4);
// Example code 1:
var a = 10;
function sum1() {
  var a = 1;
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(sum1()(2)(3));
//6 (1+2+3)
var a = 10;
function sum2() {
  //var a = 1;
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(sum2()(2)(3));
//15 (10+2+3)

// Advantages of Closures
// 1. Using Private Variables and Methods (encapsulation)
// A specific mechanism to restrict access to parts of an object or function.
const totalAmount = function (initialAmt) {
  let amount = initialAmt; // Private variable
  return {
    getAmount: function () {
      return amount; // Access private variable
    },
    creditAmount: function (amt) {
      amount += amt; // Modify private variable
      return amount;
    },
    debitAmount: function (amt) {
      amount -= amt; // Modify private variable
      return amount;
    },
  };
};

// Access the private methods
const value = totalAmount(2000); // Initialize with 2000
console.log("Get Amount Rent", value.getAmount()); // Access private variable
// Output: Get Amount Rent 2000
console.log("Credit Amount", value.creditAmount(199)); // Add 199 to amount
// Output: Credit Amount 2199
console.log("Debit  Amount", value.debitAmount(99)); // Subtract 99 from amount
// Output: Debit  Amount 2100

// 2. Data Hiding and Encapsulation
//A design principle that focuses on exposing only the necessary parts of an object or module,
//using private variables/methods as a tool.
function createCar(model) {
  let speed = 0; // Hidden implementation detail
  return {
    getModel: () => model, // Exposed public method
    accelerate: () => {
      speed += 10;
      console.log(`${model} is now running at ${speed} km/h`);
    },
    brake: () => {
      speed = Math.max(0, speed - 10);
      console.log(`${model} is now running at ${speed} km/h`);
    },
  };
}

const car = createCar("Tesla");
car.accelerate(); // Tesla is now running at 10 km/h
car.brake(); // Tesla is now running at 0 km/h
console.log(car.speed); // Undefined (speed is hidden)

// 3. Function Currying

/*  Currying transforms a function that takes multiple arguments 
(e.g., f(a, b, c)) into a sequence of functions, 
each taking one argument at a time (e.g., f(a)(b)(c)).

Key Concepts

Single Argument Functions: Currying breaks a multi-argument function into smaller, single-argument functions.
Preservation of State: Each curried function retains access to the arguments provided earlier, thanks to closures.
Flexibility: Allows partial application, where you can fix some arguments and reuse the function.
 */
// Multi-argument function
function sum1(a, b, c) {
  return a + b + c;
}

// Curried version using closures
function curriedSum(a) {
  return function (b) {
    return function (c) {
      return a + b + c; // Closure preserves access to 'a' and 'b'
    };
  };
}

// Usage
console.log(sum1(1, 2, 3)); // Output: 6
console.log(curriedSum(1)(2)(3)); // Output: 6
// Infinite Currying :
// Infinite currying allows dynamic chaining of arguments
// until a terminating condition (like no arguments) is met.
function infiniteSum(a) {
  return function (b) {
    if (b !== undefined) {
      return infiniteSum(a + b); // Closure retains the cumulative sum
    }
    return a; // Return the final sum
  };
}

console.log(infiniteSum(1)(2)(3)(4)()); // Output: 10
console.log(infiniteSum(5)(10)(15)()); // Output: 30

// Run function only once :
// Functions remember how many times the function has been run by forming a closure.
var something = (function () {
  var executed = false; // A private variable inside the IIFE
  return function () {
    if (!executed) {
      executed = true; // Update the variable to ensure this block runs only once
      console.log("do something"); // Execute the action
    }
  };
})();

// setTimeout
// It is a method that calls a function or evaluates
//an expression after a specified number of milliseconds.

function x() {
  var i = 1; // `i` is declared and initialized
  setTimeout(function () {
    // Schedule the inner function for execution
    console.log(i); // This function forms a closure over `i`
  }, 3000); // Delay execution for 3000 milliseconds (3 seconds)
  console.log("After setTimeout"); // This logs immediately
}
x();
// Memoization

/* Memoization is a technique used to optimize performance by storing
 the results of expensive function calls and returning the cached
  result when the same inputs occur again. 
By using closures, we can create a private cache to store these results */
// A basic memoize function that uses a closure to store cached results

function memoize(fn) {
  const cache = {}; // Create an empty object to store cached results
  return function (...args) {
    // Convert the arguments into a unique string key
    const key = JSON.stringify(args);
    // Check if the result for this key is already in the cache
    if (cache[key]) {
      console.log("Fetching from cache for args:", args);
      return cache[key]; // Return the cached result
    }
    // If the result is not in the cache, calculate it
    console.log("Calculating result for args:", args);
    const result = fn(...args); // Call the original function with the arguments
    // Store the result in the cache for future use
    cache[key] = result;
    // Return the calculated result
    return result;
  };
}

// Example: A function to compute the nth Fibonacci number
function fibonacci(n) {
  if (n <= 1) return n; // Base case
  return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}

// Create a memoized version of the Fibonacci function
const memoizedFibonacci = memoize(fibonacci);

// Test the memoized Fibonacci function
console.log(memoizedFibonacci(10)); // Calculating result for args: [10]
console.log(memoizedFibonacci(10)); // Fetching from cache for args: [10]

// Disadvantages of Closures

// 1. Memory Usage and Leaks

/*  Issue:  Variables in closures stay in memory as long as the closure exists.
  If not properly cleared, they use extra memory, causing memory leaks.

Solution: remove references to closures
or their variables when they're no longer needed by setting them to null. */
function createCounter() {
  let count = 0; // This variable is captured in the closure
  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2

// If counter is no longer needed:
counter = null; // Remove the reference to free memory
// Why This is Important:
/* Without setting counter to null,
 the count variable remains in memory even 
 if the counter function is not used anymore. */

 // 2. Memory Duplication


/*  Issue: When you create a function inside another function,
  a new instance of the inner function is created every time the outer function is called. 
  This can lead to unnecessary memory allocation and slower performance.
Solution: Use shared methods via the module pattern instead of repeatedly creating closures. */

// Example with Closure Duplicity

function createAdder(x) {
  return function (y) { // A new instance of this inner function is created every time
    return x + y;
  };
}

const addFive = createAdder(5); // Creates a closure with `x = 5`
console.log(addFive(3)); // 8
const addTen = createAdder(10); // Creates a new closure with `x = 10`
console.log(addTen(3)); // 13
// Drawback: Each call to createAdder creates a new closure, consuming memory for x.

//When to Use Closures vs. Module Pattern

//Use Closures:

/* When you need to maintain privacy or protect internal state (e.g., private variables or methods).
For creating functions with specific custom behaviors (e.g., event handlers or dynamic configurations).

Use Module Pattern:

1.When the behavior can be generalized and shared across instances.
When you need better memory efficiency for large-scale applications. 

2. Avoid closures if you only need shared functionality.
 Use module patterns for better memory efficiency.
*/

