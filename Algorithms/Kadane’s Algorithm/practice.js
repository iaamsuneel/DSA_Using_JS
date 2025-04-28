// 1. Printing the Subarray
// Brute-force approach
function findAllSubArray(arr) {
  const res = [];
  let end = arr.length;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < end; j++) {
      res.push(arr.slice(i, j + 1));
    }
  }
  return res;
}
//console.log(findAllSubArray([1, 2, 3]));
// output  :  [ [ 1 ], [ 1, 2 ], [ 1, 2, 3 ], [ 2 ], [ 2, 3 ], [ 3 ] ]

// 2. Find the maximum sum of a contiguous subarray in a given array.
function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = 0;
  for (let ele of nums) {
    currentSum = Math.max(ele, currentSum + ele);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6 => [4,-1,2,1]
