/* Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:
Input: nums = [], target = 0
Output: [-1,-1] */
// Approach 1 :-  using two pointer
var searchRange = function (nums, target) {
  let i = 0,
    j = nums.length;
  let fast = -1,
    last = -1;
  while (i < j) {
    if (nums[i] === target && fast == -1) {
      fast = i;
    }
    if (nums[j] === target && last == -1) {
      last = j;
    }
    if (fast === -1) i++;
    if (last === -1) j--;
    if (fast !== -1 && last !== -1) break;
  }
  return [fast, last];
};
console.log("Example 1:- ", searchRange([5, 7, 7, 8, 8, 10], 8));
console.log("Example 2:- ", searchRange([5, 7, 7, 8, 8, 10], 6));
console.log("Example 3:- ", searchRange([], 0));

// Approach 2:- iterator
var searchRange1 = function (nums, target) {
  let first = -1;
  let last = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      first = i;
      while (i < nums.length && nums[i] === target) {
        i++;
      }
      last = i - 1;
      return [first, last];
    }
  }
  return [first, last];
};
console.log("Example 1:- ", searchRange1([5, 7, 7, 8, 8, 10], 8));
console.log("Example 2:- ", searchRange1([5, 7, 7, 8, 8, 10], 6));
console.log("Example 3:- ", searchRange1([], 0));
