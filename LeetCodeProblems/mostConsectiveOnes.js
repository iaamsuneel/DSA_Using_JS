var findMaxConsecutiveOnes = function (nums) {
  let max = 0,
    count = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      count = count + 1;
      if (max < count) max = count;
    } else count = 1;
  }
  return max;
};
console.log(
  "findMaxConsecutiveOnes",
  findMaxConsecutiveOnes([1, 0, 1, 1, 1, 1, 0, 1, 2, 4, 4, 4])
);
