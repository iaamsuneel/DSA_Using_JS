// Tata 1mg
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
console.log("Example 3:- ", searchRange1([1], 1));
// another approach
