/* var threeSum = function (nums) {
	const arr = new Set();
	for (let i = 0; i < nums.length - 2; i++) {
		for (let j = i + 1; j < nums.length - 1; j++) {
			for (let k = j + i + 1; k < nums.length; k++) {
				if (nums[i] + nums[j] + nums[k] === 0) {
					console.log("first", nums[i], nums[j], nums[k]);
					// Sort the triplet to avoid duplicates in different order
					const triplet = [nums[i], nums[j], nums[k]].sort(
						(a, b) => a - b
					);
					// Add the sorted triplet to the set (Set will handle duplicates)
					arr.add(JSON.stringify(triplet));
				}
			}
		}
	}
	// Convert the set of JSON strings back to an array of arrays
	return Array.from(arr).map((item) => JSON.parse(item));
};
console.log(threeSum([3, 0, -2, -1, 1, 2])); */
function threeSum(nums, diff) {
	const results = [];
	const len = nums.length;
	for (let i = 0; i < len - 2; i++) {
		for (let j = i + 1; j < len - 1; j++) {
			for (let k = j + 1; k < len; k++) {
				if (nums[j] - nums[i] == diff && nums[k] - nums[j] == diff) {
					results.push([nums[i], nums[j], nums[k]]);
				}
			}
		}
	}
	return results;
}

// Example usage
const nums = [0, 1, 4, 6, 7, 10];
console.log(threeSum(nums, 3)); // Output: [ [-2, -1, 3], [-2, 0, 2], [-1, 0, 1] ]
