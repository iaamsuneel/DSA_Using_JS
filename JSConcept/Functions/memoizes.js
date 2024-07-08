const memoize = (fn) => {
	let cache = {};
	return function (...args) {
		// Create a key based on the arguments
		let key = JSON.stringify(args);
		if (cache[key]) {
			console.log("if -->", cache);
			return cache[key];
		} else {
			let value = fn(...args);
			cache[key] = value;
			return value;
		}
	};
};

const add = (a, b) => {
	return a + b;
};
const memoizeFun1 = memoize(add);
// Start timing
console.time("memoizeFun1");
console.log(memoizeFun1(3, 9)); // First call, calculates and stores the result in cache
console.log(memoizeFun1(3, 9)); // Second call, retrieves the result from cache
console.log(memoizeFun1(3, 9));
// End timing
console.timeEnd("memoizeFun1");
