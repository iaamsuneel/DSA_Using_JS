/* var countPairs = function (nums, target) {
	const arr = nums.sort((a, b) => a - b);
	let i = 0;
	let j = nums.length - 1;
	let count = 0;
	while (i < j) {
		console.log("i::j", i, j);
		let sum = nums[i] + nums[j];
		if (sum < target) count++;
		else if (sum < target) i++;
		else if (sum > target) j--;
	}
	return count;
};
console.log(countPairs([-1, 1, 2, 3, 1], 2));
 */
var countPairs = function (nums, target) {
  const arr = nums.sort((a, b) => a - b);
  console.log(arr);
  let i = 0;
  let j = arr.length - 1;
  let count = 0;
  while (i < j) {
    console.log("i::j", i, j);
    let sum = arr[i] + arr[j];
    if (sum < target) {
      count++;
      i++;
    } else if ((sum = target)) {
      j--;
    }
  }
  return count;
};

console.log(countPairs([-1, 1, 2, 3, 1], 2));
