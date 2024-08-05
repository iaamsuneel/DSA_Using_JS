// infinite curring in JavaScript
function add(a) {
	return function (b) {
		if (b !== undefined) {
			return add(a + b);
		}
		return a;
	};
}
console.log(add(2)(3)(9)(29)(9)());
// implement this code
// asked Question in Car24
const calculate = {
	total: 0,
	add(a) {
		this.total += a;
		return this;
	},
	multiply(a) {
		this.total *= a;
		return this;
	},
	subtract(a) {
		this.total -= a;
		return this;
	},
};

const result = calculate.add(10).multiply(5).subtract(30).add(10).multiply(2);
console.log("result-->", result.total);
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
			return this;
		},
	};
}

const calculates = createCalculator();
const results = calculates.add(10).multiply(5).subtract(30).add(10).multiply(2);
console.log(result.getTotal()); // Output: 40
