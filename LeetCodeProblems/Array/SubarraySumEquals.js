var subarraySum = function (nums, k) {
	let count = 0;
	const arr = [];
	for (let i = 0; i < nums.length; i++) {
		for (let j = i; j < nums.length; j++) {
			arr.push(nums.slice(i, j + 1));
		}
	}
	for (let l = 0; l < arr.length; l++) {
		let sum = 0;
		arr[l].forEach((ele) => {
			sum = sum + ele;
		});
		if (sum == k) count++;
	}
	return count;
};
console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 3));
