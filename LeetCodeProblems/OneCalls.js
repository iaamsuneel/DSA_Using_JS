var once = function (fn) {
	let called = false;
	let result;
	return function (...args) {
		if (!called) {
			called = true;
			result = fn(...args);
		}
		return result;
	};
};
function sum(a, b, c) {
	return a + b + c;
}
const res = once(sum);
console.log(
	res([
		[1, 2, 3],
		[2, 3, 6],
	])
);
