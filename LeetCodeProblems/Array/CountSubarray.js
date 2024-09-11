/* var countSubarrays = function (nums, p) {
	const arr = [];
	for (let i = 0; i < nums.length; i++) {
		for (let j = i; j < nums.length; j++) {
			arr.push(nums.slice(i, j + 1));
		}
	}
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		let product = 0;
		for (let j = 0; j < arr[i].length; j++) {
			product = product + arr[i][j];
		}
		if (product * arr[i].length < p) {
			count++;
		}
	}
	return count;
}; */
var countSubarrays = function (nums, k) {
	let count = 0;
	let n = nums.length;
	for (let i = 0; i < n; i++) {
		let sum = 0;
		for (let j = i; j < n; j++) {
			sum += nums[j];
			let length = j - i + 1;
			if (sum * length < k) {
				count++;
			} else {
				break;
			}
		}
	}
	return count;
};

console.log(countSubarrays([2, 1, 4, 3, 5], 10)); // 6
console.log(countSubarrays([1, 1, 1], 5)); //
