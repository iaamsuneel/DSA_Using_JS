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
// TLE ,TC - O(n3)
/* function threeSum(nums, target) {
  const results = [];
  const len = nums.length;
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        if (nums[i] + nums[j] + nums[k] == target) {
          results.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return results;
} */

// uisng two pointer
var threeSum = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let total = nums[i] + nums[j] + nums[k];
      if (total > 0) {
        k--;
      } else if (total < 0) {
        j++;
      } else {
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        while (nums[j] === nums[j - 1] && j < k) {
          j++;
        }
      }
    }
  }
  return res;
};

const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums, 0));
