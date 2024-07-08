function add(a) {
	return a + 5;
}
function substract(a) {
	return a - 3;
}
function multiple(a) {
	return a * 5;
}
const compose = (...functions) => {
	return (args) => {
		return functions.reduceRight((arg, fn) => fn(arg), args);
	};
};
const evaluate = compose(add, substract, multiple);
console.log("evaluate--->", evaluate(1));
