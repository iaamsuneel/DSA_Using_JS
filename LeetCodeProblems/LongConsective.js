var longestConsecutive = function (nums) {
	const arr = nums
		.filter((item, index) => nums.indexOf(item) === index)
		.sort((a, b) => a - b);
	if (nums.length == 0) return 0;
	console.log(arr);
	let res = [],
		count = 1;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] + 1 === arr[i + 1]) {
			count++;
		} else {
			res.push(count);
			count = 1;
		}
	}
	return Math.max(...res);
};
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // [9,1,4,7,3,-1,0,5,8,-1,6]
console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));
