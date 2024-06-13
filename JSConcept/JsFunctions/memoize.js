function memoize(fn) {
	const cache = {};
	return function (...args) {
		const key = JSON.stringify(args);
		if (!(key in cache)) {
			cache[key] = fn(...args);
		}
		return cache[key];
	};
}
const sum = memoize(function (a, b) {
	return a + b;
});
const fib = memoize(function (n) {
	if (n <= 1) {
		return 1;
	}
	return fib(n - 1) + fib(n - 2);
});
const factorial = memoize(function (n) {
	if (n <= 1) {
		return 1;
	}
	return factorial(n - 1) * n;
});
// Example usage
console.log(sum(2, 3)); // Output: 5
console.log(sum(3, 2)); // Output: 5 (Different order, separate call)
console.log(fib(5)); // Output: 8
console.log(factorial(4)); // Output: 24
