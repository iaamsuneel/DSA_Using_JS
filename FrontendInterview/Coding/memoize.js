// Memoization utility function
function memoize(fn) {
  const cache = {}; // Object to store computed results
  return function (...args) {
    // Convert the arguments array into a string to use as the cache key
    const key = JSON.stringify(args);
    // Check if the result is already cached
    if (key in cache) {
      return cache[key]; // Return cached result
    } else {
      const res = fn(...args); // Compute the result
      cache[key] = res; // Store the result in the cache
      return res; // Return the computed result
    }
  };
}

// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
  return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Memoize all the functions
const addMemoized = memoize(add);
const subtractMemoized = memoize(subtract);
const multiplyMemoized = memoize(multiply);

// Example usage of memoized functions
// Adding
console.time("addMemoized(4, 5)");
console.log("Add (4, 5):", addMemoized(4, 5)); // Output: 9
console.timeEnd("addMemoized(4, 5)");
console.time("addMemoized(4, 5)");
console.log("Add Second Call", addMemoized(4, 5)); // Output: 9
console.timeEnd("addMemoized(4, 5)");
// Subtracting
console.time("subtractMemoized(10, 3)");
console.log("Subtract (10, 3):", subtractMemoized(10, 3)); // Output: 7
console.timeEnd("subtractMemoized(10, 3)");

// Multiplying
console.time("multiplyMemoized(6, 7)");
console.log("Multiply (6, 7):", multiplyMemoized(6, 7)); // Output: 42
console.timeEnd("multiplyMemoized(6, 7)");

console.time("multiplyMemoized(6, 7)");
console.log("Multiply Second Call ", multiplyMemoized(6, 7)); // Output: 42
console.timeEnd("multiplyMemoized(6, 7)");
